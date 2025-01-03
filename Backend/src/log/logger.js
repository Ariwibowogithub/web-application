const dev_logger = require("./dev-logger");
const prod_logger = require("./prod-log");

let logger = null;

if (process.env.NODE_ENV === "development") {
  logger = dev_logger();
} else if (process.env.NODE_ENV === "production") {
  logger = prod_logger();
}
module.exports = logger;
