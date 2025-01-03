let { register, login, getCurrent, getAll } = require("../services/auth.service");
const ResponseError = require("../errors/response-error");
const { decrypt } = require("../utils/enc-util");
const { loginRefresh, reqAccessToken, getRefreshToken, deleteUser, logout } = require("../services/auth-refresh.service");
const { http } = require("winston");

class AuthController {
  static login = async (req, res, next) => {
    try {
        const { clean, accessToken } = await login(req);

        if (!clean || !accessToken) {
            throw new ResponseError(400, "Invalid login response");
        }

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                clean,
                accessToken,
            },
        });
    } catch (err) {
        next(err);
    }
};


  static loginRefresh = async (req, res, next) => {
    try {
      const response = await loginRefresh(req);
      if (response instanceof ResponseError) {
        res.status(400).json({
          success: false,
          message: response.message,
        });
      } else {
        res.status(200).cookie("refreshToken", response.refreshToken, { httpOnly: true }).json({
          success: true,
          message: "User logged in successfully",
          response,
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static register = async (req, res, next) => {
    try {
      const user = await register(req);
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  static getCurrent = async (req, res, next) => {
    try {
      const userId = req.user.id;
      const user = await getCurrent(userId);
      if (user instanceof ResponseError) {
        res.status(400).json({
          success: false,
          message: user.message,
        });
      }
      res.status(201).json({
        success: true,
        message: "User information retrieved successfully",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (req, res, next) => {
    const id = req.user.id;
    try {
      const user = await deleteUser(id);
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };

  static getAllUser = async (req, res, next) => {
    try {
      const users = await getAll();
      res.status(200).json({
        success: true,
        message: "All users retrieved successfully",
        data: users,
      });
    } catch (err) {
      next(err);
    }
  };

  static refresh = async (req, res, next) => {
    try {
      const token = await reqAccessToken(req);
      if (token instanceof ResponseError) {
        res.status(400).json({
          success: false,
          message: token.message,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Token refreshed successfully",
          data: token,
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static decryptToken = async (req, res, next) => {
    try {
      const { accessToken, refreshToken } = req.body;
      const decryptedAccessToken = decrypt(accessToken);
      const decryptedRefreshToken = decrypt(refreshToken);
      res.status(200).json({
        success: true,
        message: "Token decrypted successfully",
        data: {
          accessToken: decryptedAccessToken,
          refreshToken: decryptedRefreshToken,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  static getRefresh = async (req, res, next) => {
    const { id } = req.body;
    try {
      const refreshToken = await getRefreshToken(id);
      res.status(200).json({
        success: true,
        message: "Refresh token retrieved successfully",
        data: refreshToken,
      });
    } catch (err) {
      next(err);
    }
  };

  static logout = async (req, res, next) => {
    const id = req.user.id;
    try {
      const user = await logout(id, "web");
      res.status(200).clearCookie("refreshToken", { httpOnly: true }).json({
        success: true,
        message: "User logged out successfully",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = AuthController;
