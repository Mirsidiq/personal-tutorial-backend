const errorHandlerMiddleware = (err, _, res, next) => {
  if (err) {
    res.status(err.status).json({
      message: err.message,
    });
    return;
  }
  next();
};
export { errorHandlerMiddleware };
