const csrf = require("csrf");
const tokens = new csrf();
const secret = tokens.secretSync();

const csrfMiddleware = (req, res, next) => {
  if (req.method === "POST" || req.method === "PUT" || req.method === "DELETE" || req.method === "PATCH") {
    const token = req.body._csrf;
    if (!token || !tokens.verify(secret, token)) {
      return res.status(403).send("Invalid/missing CSRF token");
    }
  } else {
    const token = tokens.create(secret);
    res.locals.csrfToken = token;
  }

  next();
};

module.exports = csrfMiddleware;
