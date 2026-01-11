class ApiError extends Error {
  constructor (statusCode,message="Internal server error. ") {
    super(message) // Call the parent Error constructor
    this.statusCode = statusCode
    this.name = "ApiError"// Optional: custom error name for easier identification
    // Capture a clean stack trace, starting from where the error is thrown
    Error.captureStackTrace(this,this.constructor)
  }
}

export default ApiError