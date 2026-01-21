import mongoose from "mongoose";

const followSchema = mongoose.Schema({
    follower:{ 
       type: mongoose.Types.ObjectId,
       ref:'User',
       required: true
    },
    followee:{ 
       type: mongoose.Types.ObjectId,
       ref:'User',
       required:true
    }
},{timestamps:true})

const Follow = mongoose.model('Follow',followSchema)
export default Follow