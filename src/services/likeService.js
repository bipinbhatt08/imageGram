import { checkIfLikeExist, createLike, deleteLike, deleteManyLike, getLikes, } from "../repositories/likeRepository.js"
import { findPostById } from "../repositories/postRepository.js";
import ApiError from "../utils/apiErrorHandler.js"
import { findCommentByIdService } from "./commentService.js";

export const createLikeService = async(user,onModel,likeableId)=>{
    let likeableExist 
    if(onModel === "Post") likeableExist = await findPostById(likeableId)
    else likeableExist = await findCommentByIdService(likeableId)
    if (!likeableExist) {
        throw new ApiError(404, `${onModel} not found.` )
    }
    const alreadyLiked = await checkIfLikeExist(user,onModel,likeableId)
    if(alreadyLiked){
        throw new ApiError(409,"User already liked "+onModel.toLowerCase())
    }
    const response = await createLike(user,onModel,likeableId)
    return response
}

export const getLikesService = async(onModel,likeableId)=>{
    let likeableExist 
    if(onModel === "Post") likeableExist = await findPostById(likeableId)
    else likeableExist = await findCommentByIdService(likeableId)
    if (!likeableExist) {
        throw new ApiError(404, `${onModel} not found.` )
    }
    const response = await getLikes(onModel,likeableId)
    return response
}
export const deleteLikeService = async(user,onModel,likeableId)=>{
    let likeableExist 
    if(onModel === "Post") likeableExist = await findPostById(likeableId)
    else likeableExist = await findCommentByIdService(likeableId) 
    if (!likeableExist) {
        throw new ApiError(404, `${onModel} not found.` )
    }
    const response = await deleteLike(user,onModel,likeableId)
    if(!response){
        throw new ApiError(409, "User has not liked the post")
    }
    return null
}
export const deleteManyLikeService = async(onModel,likeableIds,session)=>{
    //we another service is calling it.. will get valid data only
        const response = await deleteManyLike(onModel,likeableIds,session)
        return response
}
