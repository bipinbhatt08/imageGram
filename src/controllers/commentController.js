import { createCommentService } from "../services/commentService.js";
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