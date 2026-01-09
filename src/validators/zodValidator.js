

export const validate = (schema)=>{
    return (req,res,next)=>{

        console.log("THIS IS THE REQUEST LET's SEEE")
        try {
            console.log(req.body, "Req.boy")
            schema.parse(req.body)

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