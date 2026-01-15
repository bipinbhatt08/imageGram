import Like from "../schema/like.js"

export const createLikeOnPost = async(user,post)=>{
    const response = await Like.create({user,post})
    return response
}

export const checkIfLikeExist = async (user,post)=>{
    const response = await Like.findOne({user,post})
    return response
}