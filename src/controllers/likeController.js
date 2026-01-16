import { createLikeService, deleteLikeService, getLikesService } from "../services/likeService.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const likeLikeable =asyncHandler( async(req,res)=>{
    const user = req.user._id
    const {onModel,likeableId} = req.body
    const response = await createLikeService(user,onModel,likeableId)
    return res.status(201).json(ApiResponse(response,`${onModel} liked successfully.`))
})

export const getLikes = asyncHandler(async(req,res)=>{
    const {onModel,likeableId} = req.query
    const response = await getLikesService(onModel,likeableId)
    return res.status(200).json(ApiResponse(response,"Likes fetched successfully."))
})

export const unlikeLikeable =asyncHandler( async(req,res)=>{
    const user = req.user._id
    const {onModel,likeableId} = req.body
    const response = await deleteLikeService(user,onModel,likeableId)
    return res.status(200).json(ApiResponse(response,`${onModel} unliked successfully.`))
})