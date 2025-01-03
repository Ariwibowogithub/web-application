const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const { validate } = require("../validations/validation");
const AuthValidation = require("../validations/auth.validation");
const ResponseError = require("../errors/response-error");
const TokenUtil = require("../utils/token-util");
const { encrypt } = require("../utils/enc-util");

const register = async (req) => {
  const validateRequest = validate(AuthValidation.RegisterValidation, req.body);
  const check = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: validateRequest.email,
        },
        {
          username: validateRequest.username,
        },
      ],
    },
  });
  if (check) {
    throw new ResponseError(400, "Email or username already exists");
  }
  const hashedPassword = await bcrypt.hashSync(validateRequest.password, 10);
  const user = await prisma.user.create({
    data: {
      email: validateRequest.email,
      password: hashedPassword,
      name: validateRequest.name,
      username: validateRequest.username,
    },
    select: {
      id: true,
      name: true,
      username: true,
    },
  });
  return user;
};

const login = async (req) => {
  const validateRequest = validate(AuthValidation.LoginValidation, req.body);
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

  const { password, email, ...clean } = user;
  const payload = {
      id: user.id,
      username: user.username,
  };
  let accessToken = TokenUtil.signAccessToken(payload);

  // Tambahkan accessToken ke clean
  clean.token = accessToken;

  return { clean, accessToken };
};




const getCurrent = async (id) => {
  id = validate(AuthValidation.getCurrentValidation, id);
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
    },
  });

  if (!user) {
    return new ResponseError(404, "User not found");
  }

  return user;
};

const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
    },
  });

  return users;
};

module.exports = {
  register,
  login,
  getCurrent,
  getAll,
};
