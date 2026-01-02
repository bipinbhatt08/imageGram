import mongoose from 'mongoose'
const postSchema = mongoose.Schema({
    caption:{
        type:String,
        required:true,
        minLenght:5,
    },
    image:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,// this obejct id will always belong to the User collectioin
        ref:"User"// give the reference Collection
    }
})

const post = mongoose.model("Post",postSchema)
export default post