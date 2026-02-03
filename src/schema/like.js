import mongoose from "mongoose";
import user from "./user";
const likeSchema = mongoose.Schema({

//polymorphic Like model so a single collection can handle likes for both posts and comments

    user:{
        type:mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    onModel:{
        type: String,
        enum: ['Post','Comment'],
        required: true
    },
    likeableId:{
        type:mongoose.Types.ObjectId,
        refPath: 'onModel',
        required: true
    },


},{timestamps: true})

//unique compound index to prevent duplicate like.
likeSchema.index({
    user:1,
    likeableId:1,
    onModel:1
},{unique:true})

const Like = mongoose.model("Like",likeSchema)
export default Like