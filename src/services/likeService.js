import { checkIfLikeExist, createLikeOnPost } from "../repositories/likeRepository.js"
import { findPostById } from "../repositories/postRepository.js";
import ApiError from "../utils/apiErrorHandler.js"

export const createLikeOnPostService = async(user,post)=>{
    const existingPost = await findPostById(post)
    if (!existingPost) {
        throw new ApiError(404, "Post not found")
    }
    const alreadyLiked = await checkIfLikeExist(user,post)
    if(alreadyLiked){
        throw new ApiError(409,"User already liked the post")
    }
    const response = await createLikeOnPost(user,post)
    return response
}