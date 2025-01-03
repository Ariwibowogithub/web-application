const jwt = require("jsonwebtoken");

const AuthGuard = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "Unauthorized" }).end();
  }
  const token = header.split(" ")[1];
  await jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" }).end();
    }
    req.user = user;
    next();
  });
};

module.exports = AuthGuard;
