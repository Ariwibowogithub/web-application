const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const dev_logger = () => {
  return createLogger({
    level: "info",
    format: combine(format.colorize(), timestamp({ format: "HH:mm:ss" }), logFormat),
    transports: [new transports.Console()],
  });
};

module.exports = dev_logger;
