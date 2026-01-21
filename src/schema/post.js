import mongoose from 'mongoose'
import { minLength, required } from 'zod/mini'
const postSchema = mongoose.Schema({
    caption:{
        type:String,
        required:true,
        minLength:5,
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,// this obejct id will always belong to the User collectioin
        ref:"User"// give the reference Collection
    }
},{timestamps:true})

const Post = mongoose.model("Post",postSchema)
export default Post