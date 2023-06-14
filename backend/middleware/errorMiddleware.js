const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    // If headers have already been sent, pass the error to the next middleware
    return next(err)
  }
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message

  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = `Resource not found`
    statusCode = 404
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "x" : err.stack,
  })
}

export { notFound, errorHandler }
