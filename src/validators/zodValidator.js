import ApiError from "../utils/apiErrorHandler.js"


export const validate = (schema)=>{
    return (req,res,next)=>{
        try {
            schema.parse(req.body||{})
            next()
        } catch (e) {
            next(e)
        
        }
    }
}