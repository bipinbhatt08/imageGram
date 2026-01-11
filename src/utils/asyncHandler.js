const asyncHandler = (requestHandler)=>{
return  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch(err=>next(err))
// In Express, calling next(err) skips all normal middlewares and routes and jumps to the first middleware that has 4 parameters: (err, req, res, next) — that’s the global error handler.

}
}
export default asyncHandler