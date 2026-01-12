import { checkIfUserExistsService } from "../services/userService.js"
import ApiError from "../utils/apiErrorHandler.js"
import { validateToken } from "../utils/jwt.js"

export const isAuthenticated = async(req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new ApiError(401, "Authorization token missing"))
    }

    try {
        const token = authHeader.split(" ")[1]
        const decoded = validateToken(token)
        const doesUserExist = await checkIfUserExistsService(decoded) 
        if(!doesUserExist){
            
          return  next(new ApiError(401,"No user with this token."))
        }
        req.user = decoded
        next()
    } catch (error) {
        next(new ApiError(401, "Invalid or expired token"))
    }
}
