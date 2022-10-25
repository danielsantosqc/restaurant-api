function logError(err, req, res, next) {
  console.log('log error');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('error handler------');
  res.status(500).json({
		message: err.message,
    stack: err.stack,
  });
}
function boomErrorHandler(err, req, res, next) {
	if (err.isBoom) {
		console.log('---Paso por boom-----');
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
		return false
  }
  next(err);
}

module.exports = { logError, errorHandler, boomErrorHandler };
