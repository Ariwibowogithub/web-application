const ResponseError = require("../errors/response-error");
const { ValidationError } = require("joi");

const ErrorMiddleware = async (err, req, res, next) => {
  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        success: false,
        message: err.message,
        code: "",
      })
      .end();
  } else if (err instanceof ValidationError) {
    res
      .status(400)
      .json({
        success: false,
        message: err.message,
        code: "",
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        success: false,
        message: err.message,
        code: "",
      })
      .end();
  }
};

module.exports = ErrorMiddleware;
