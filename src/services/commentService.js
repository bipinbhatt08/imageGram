import { createComment, findCommentById, getAllComments } from "../repositories/commentRepository.js"
import { findPostById } from "../repositories/postRepository.js"
import post from "../schema/post.js"
import ApiError from "../utils/apiErrorHandler.js"
import { getPostByIdService } from "./postService.js"

export const createCommentService = async(user,post,content,parent=null)=>{
    //user will be valid ..but about post.. 

    const postExist = await findPostById(post)
    if(!postExist){
        throw new ApiError(404,"Post not found")
    }
    if(parent){
        const parentExist = await findCommentById(parent)
        if(!parentExist){
            throw new ApiError(404,"Comment not found for reply")
        }
    }
    const response = await createComment(user,post,content,parent)
    return response
}

export const getAllCommentsService = async(post,limit,offset)=>{
    const postExist = await getPostByIdService(post)
    if(!postExist){
        throw new ApiError(404,"Post not found")
    }
    const response = await getAllComments(post,limit,offset)
    return response
}