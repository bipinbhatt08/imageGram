

export const validate = (schema)=>{
    return (req,res,next)=>{
        try {
            schema.parse({
                caption: req.body.caption
            })

            next()
        } catch (e) {
            console.log(e)
            return res.status(400).json({
                success:false,
                message:"Validation Errors.",
                error: e.issues

            })
        }
    }
}