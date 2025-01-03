const AuthValidation = require("../validations/auth.validation");
const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const { validate } = require("../validations/validation");
const ResponseError = require("../errors/response-error");
const TokenUtil = require("../utils/token-util");
const jwt = require("jsonwebtoken");

const loginRefresh = async (req) => {
  const validateRequest = validate(AuthValidation.LoginV2Validation, req.body);
  let user = await prisma.user.findUnique({
    where: {
      email: validateRequest.email,
    },
  });
  if (!user) {
    return new ResponseError(400, "Incorrect credentials");
  }
  const checkPassword = await bcrypt.compare(validateRequest.password, user.password);
  if (!checkPassword) {
    return new ResponseError(400, "Incorrect credentials");
  }
  const payload = {
    id: user.id,
    username: user.username,
  };
  let accessToken = TokenUtil.signAccessToken(payload);
  let refreshToken = TokenUtil.signRefreshToken(payload);
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);
  await prisma.personalToken.upsert({
    where: { userId_deviceInfo: { userId: user.id, deviceInfo: validateRequest.deviceInfo } },
    update: { token: refreshToken, createdAt: new Date(), expiresAt: expiresAt },
    create: { userId: user.id, token: refreshToken, deviceInfo: validateRequest.deviceInfo, expiresAt: expiresAt },
  });
  const { password, email, ...clean } = user;
  return { clean, accessToken, refreshToken };
};

const reqAccessToken = async (req) => {
  const validateRequest = validate(AuthValidation.RefreshTokenValidation, req.body);
  if (!validateRequest.refreshToken) {
    return new ResponseError(400, "No token provided");
  }
  const token = jwt.verify(validateRequest.refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) {
      return new ResponseError(400, err.message);
    }
    return user;
  });
  console.log("decode token:", token);
  const refreshToken = await prisma.personalToken.findUnique({
    where: {
      userId_deviceInfo: {
        userId: token.id,
        deviceInfo: validateRequest.deviceInfo,
      },
    },
  });
  console.log("refreshToken:", refreshToken);
  if (!refreshToken || refreshToken.token !== validateRequest.refreshToken) return new ResponseError(400, "Invalid token");
  if (refreshToken.expiresAt && new Date() > refreshToken.expiresAt) {
    return res.status(403).send("Refresh token has expired");
  }
  const accessToken = TokenUtil.signAccessToken({ id: token.id, username: token.username });
  return accessToken;
};

const deviceInfo = () => {
  const userAgent = navigator.userAgent;
  const screenResolution = `${screen.width}x${screen.height}`;
  const timestamp = new Date().toISOString();

  return `${userAgent}-${screenResolution}-${timestamp}`;
};

const getRefreshToken = async (id) => {
  // const query = `SELECT * FROM personal_tokens WHERE userId = ${id}`;
  const user = await prisma.$queryRaw`SELECT * FROM personal_tokens WHERE userId = ${id}`;
  if (!user) {
    return new ResponseError(400, "Incorrect credentials");
  }
  return user;
};

const deleteUser = async (request) => {
  const user = await prisma.user.delete({
    where: {
      id: request,
    },
  });
  return user;
};

const logout = async (id, device) => {
  const user = await prisma.personalToken.delete({
    where: {
      userId_deviceInfo: {
        userId: id,
        deviceInfo: device,
      },
    },
  });
  return user;
};

module.exports = { loginRefresh, reqAccessToken, getRefreshToken, deleteUser, logout };
