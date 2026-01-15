import { createLikeOnPostService } from "../services/likeService.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const likeThePost =asyncHandler( async(req,res)=>{
    const user = req.user._id
    const post = req.params.id
    const response = await createLikeOnPostService(user,post)
    return res.status(201).json(ApiResponse(response,"Post liked successfully."))
})