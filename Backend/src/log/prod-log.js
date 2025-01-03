const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = () => {
  return createLogger({
    format: combine(timestamp(), format.colorize(), myFormat),
    transports: [new transports.Console(), new transports.File({ filename: "combined.log" }), new transports.File({ filename: "error.log", level: "error" })],
  });
};

module.exports = logger;
