import Like from "../schema/like.js"
import user from "../schema/user.js"

export const createLikeOnPost = async(user,post)=>{
    const response = await Like.create({user,post})
    return response
}

export const checkIfLikeExist = async (user,post)=>{
    const response = await Like.findOne({user,post})
    return response
}

export const getLikesOnThePost = async(post)=>{
    const likes = await Like.find({post}).populate({ path: 'user', select: 'username' }).sort({ createdAt: -1 });
    const count = await Like.countDocuments({post})
    return {likes,count}
}

export const deleteLikeOnPost = async(user,post)=>{

      // Returns the deleted document, or null if not found
    const response = await Like.findOneAndDelete({user,post})
    return response
}