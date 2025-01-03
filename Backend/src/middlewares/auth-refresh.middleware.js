const jwt = require("jsonwebtoken");

const AuthRefresh = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "Unauthorized" }).end();
  }
  const token = header.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" }).end();
    }
    req.user = user;
    next();
  });
};

module.exports = AuthRefresh;
