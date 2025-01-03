const AuthController = require("../controllers/auth.controller");
const AuthGuard = require("../middlewares/auth-guard.middleware");
const AuthRefresh = require("../middlewares/auth-refresh.middleware");

const route = require("express").Router();

route.get("/test", (req, res) => {
  res.send("test route");
});

route.post("/register", AuthController.register);
route.post("/login", AuthController.login);
route.post("/loginRefresh", AuthController.loginRefresh);
route.get("/current", AuthGuard, AuthController.getCurrent);
route.post("/logout", AuthRefresh, AuthController.logout);
route.get("/all", AuthController.getAllUser);
route.post("/refresh", AuthRefresh, AuthController.refresh);
route.post("/vuln", AuthController.getRefresh);
route.get("/set-cookie", (req, res) => {
  res.cookie("cookieHttpOnly", "cookieHttpOnly", { httpOnly: true }).cookie("cookieNoHttp", "cookieNoHttp").send("Cookie set");
});
// route.post("/dec", AuthController.decryptToken);

// route untuk mendapatkan csrf token
route.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: res.locals.csrfToken });
});

route.delete("/delete", AuthGuard, AuthController.deleteUser);

module.exports = route;
