const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const router = require("./src/routes/index.routes");
const sanitizeMiddleware = require("./src/middlewares/sanitize");
require("dotenv").config();
const logger = require("./src/log/logger");
const morgan = require("morgan");
const errorMiddleware = require("./src/middlewares/error.middleware");
const csrfMiddleware = require("./src/middlewares/csrf.middleware");
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sanitizeMiddleware);
// app.use(
//   morgan("combined", {
//     stream: {
//       write: (message) => logger.info(message.trim()),
//     },
//   })
// );
// app.use(csrfMiddleware);
app.use(errorMiddleware);
app.use(cookieParser());
app.use("/api", router);

app.get("/", (req, res) => {
  // logger.info("Hello World!");
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
