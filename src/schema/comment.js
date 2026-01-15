import mongoose  from "mongoose";
const commentSchema = mongoose.Schema({
        post:{
            type: mongoose.Types.ObjectId,
            ref: "Post",
            required: true

        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        content: {
            type: String,
            required: true
        },
        parent:{
            type: mongoose.Types.ObjectId,
            ref: "Comment",
            default: null
        }
},{timestamps:true})

const Comment = mongoose.model("Comment",commentSchema)
export default Comment