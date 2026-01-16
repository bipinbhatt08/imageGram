import Like from "../schema/like.js"

export const createLike = async(user,onModel,likeableId)=>{
    const response = await Like.create({user,onModel,likeableId})
    return response
}

export const checkIfLikeExist = async (user,onModel,likeableId)=>{
    const response = await Like.findOne({user,onModel,likeableId})
    return response
}

export const getLikes= async(onModel,likeableId)=>{
    const likes = await Like.find({onModel,likeableId}).populate({ path: 'user', select: 'username' }).sort({ createdAt: -1 });
    const count = await Like.countDocuments({onModel,likeableId})
    return {likes,count}
}

export const deleteLike = async(user,onModel,likeableId)=>{

      // Returns the deleted document, or null if not found
    const response = await Like.findOneAndDelete({user,onModel,likeableId})
    return response
}