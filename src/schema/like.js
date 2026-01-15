import mongoose from "mongoose";
const likeSchema = mongoose.Schema({

    post:{
        type:mongoose.Types.ObjectId,
        ref: "Post",
        required: true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }

},{timestamps: true})

const Like = mongoose.model("Like",likeSchema)