import mongoose from "mongoose"
import { createComment, deleteChildComments, deleteComment, findCommentById, getAllComments, getChildComments, getCommentWithOwners } from "../repositories/commentRepository.js"
import { findPostById } from "../repositories/postRepository.js"
import ApiError from "../utils/apiErrorHandler.js"
import { getPostByIdService } from "./postService.js"
import {  deleteManyLikeService } from "./likeService.js"

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

export const findCommentByIdService = async(id)=>{
    const response = await findCommentById(id)
    return response
}

export const getChildCommentsService = async(parent)=>{
    const response = await getChildComments(parent)
    return response
}


export const deleteCommentService = async(user,id)=>{
    // get comment with the owners
    const comment = await getCommentWithOwners(id)
    if(!comment){
        throw new ApiError(404, "No comment found.")
    }
    
    //only comment owner or the post onwer can delete comment
    const isCommentOwner = user.toString()==comment.user._id.toString()
    const isPostOwner = user.toString()==comment.post.user.toString()

    if(!isCommentOwner && !isPostOwner ){
        throw new ApiError(403,"Unauthorized to delete the comment")
    }

    // start session from here
    const session = await mongoose.startSession()
    await session.startTransaction()
    console.log("Transaction started for comment deletion")

    try {
         // get all the replies of the comments
        console.log("Fetching child comments..")
        const childComments = await getChildComments(id,session)
        const ids = [id,...childComments.map((child)=>child._id)] // put all comments id together
        
        // deletion

        console.log("Deleting main comment..");
        const response = await deleteComment(id,session) 
        console.log("Deleting all likes ..");
        
        await deleteManyLikeService("Comment",ids,session)
        console.log("Deleting all replies  ..");
        await deleteChildComments(id,session)
       
        await session.commitTransaction()
        return response
    } catch (error) {
        await session.abortTransaction()
        console.error(error) 
        throw new ApiError(400,"Problem while deleting comment")
    }finally{
        await session.endSession()
    }
}