const jwt = require("jsonwebtoken");
dotenv = require("dotenv");
dotenv.config();

class TokenUtil {
  static signAccessToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });
  }
  static signRefreshToken(payload) {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
  }
}

module.exports = TokenUtil;
