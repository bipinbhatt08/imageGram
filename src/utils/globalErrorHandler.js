import { ZodError } from "zod";
import ApiError from "./apiErrorHandler.js";

const globalErrorHandler = (err, req, res, next) => {
    console.error(err); // logs the error in console
    
    let message = "Internal server Error"
    let statusCode = 500
    if(err instanceof ZodError){
        message= err.issues[0].message
        statusCode = 400
    }
    else if ( err instanceof ApiError) {
        message = err.message 
        statusCode  = err.statusCode
    }
    res.status(statusCode).json({ 
        message,
        success:false,
        data: null
    });
}

export default globalErrorHandler
/*Client -> /api/signup -> asyncHandler(registerUser)
        -> Controller runs -> throws ApiError
        -> asyncHandler catches -> calls next(err)
        -> Express jumps to globalErrorHandler
        -> globalErrorHandler sends JSON response
        -> Client gets { message: "User with email already exists" }
*/