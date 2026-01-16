import ApiError from "../utils/apiErrorHandler.js"


export const validate = (schema)=>{
    return (req,res,next)=>{
        try {
            //check if body is empty 
            if(!req.body || Object.keys(req.body).length === 0){
                next(new ApiError(400,"Please provide all the information."))
            }
            
            schema.parse(req.body)
            next()
        } catch (e) {
            console.log(e)
            next(new ApiError(400,e.issues[0].message||"Validation Error"))
        
        }
    }
}