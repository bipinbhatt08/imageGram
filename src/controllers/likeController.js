import { createLikeOnPostService, deleteLikeOnPostService, getLikesOnThePostService } from "../services/likeService.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const likeThePost =asyncHandler( async(req,res)=>{
    const user = req.user._id
    const post = req.params.id
    const response = await createLikeOnPostService(user,post)
    return res.status(201).json(ApiResponse(response,"Post liked successfully."))
})

export const getLikesOnPost = asyncHandler(async(req,res)=>{
    const post = req.params.id
    const response = await getLikesOnThePostService(post)
    return res.status(200).json(ApiResponse(response,"Likes fetched successfully."))
})

export const UnlikeThePost =asyncHandler( async(req,res)=>{
    const user = req.user._id
    const post = req.params.id
    const response = await deleteLikeOnPostService(user,post)
    return res.status(200).json(ApiResponse(response,"Post unliked successfully."))
})