import post from "../schema/post.js";
import { createCommentService, deleteCommentService, getAllCommentsService, getChildCommentsService } from "../services/commentService.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createComment = asyncHandler(async(req,res)=>{
    const user = req.user._id
    const {post,content,parent} = req.body
    const response = await createCommentService(user,post,content,parent)
    res.status(201).json(
        ApiResponse(response,"Comment posted successfully.")
    )
})

export const getCommentsOnPost = asyncHandler(async(req,res)=>{
    const limit = parseInt(req.query.limit) || 10
    const offset = parseInt(req.query.offset) || 0    
    const post = req.params.id
    const response = await getAllCommentsService(post,limit,offset)
    res.status(200).json(
        ApiResponse(response,"Comment fetched successfully.")
    )
})
export const getReplies = asyncHandler(async(req,res)=>{
    const parent = req.params.id
    const response = await getChildCommentsService(parent)
    res.status(200).json(
        ApiResponse(response,"Replies fetched successfully.")
    )
})

export const deleteComment = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const user = req.user._id
    console.log(id)
    const response = await deleteCommentService(user,id)
    res.status(200).json(
        ApiResponse(null,"Comment deteled successfully.")
    )
})