import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { followSomeoneService, unFollowSomeoneService,checkIfFollowingService} from "../services/followService.js";

export const followSomeone = asyncHandler(async(req,res)=>{
    const follower = req.user._id //follower is vaild id.
    const followee = req.params.id // we will check in service layer

    const response = await followSomeoneService(follower,followee)
    res.status(201).json(
        ApiResponse(response,"Followed successfully")
    )
})
export const unFollowSomeone = asyncHandler(async(req,res)=>{
    const follower = req.user._id //follower is vaild id.
    const followee = req.params.id // we will check in service layer

    const response = await unFollowSomeoneService(follower,followee)
    res.status(200).json(
        ApiResponse(response,"Unfollowed successfully")
    )
})
export const checkIfFollowing = asyncHandler(async(req,res)=>{
    const follower = req.user._id //follower is vaild id.
    const followee = req.params.id // we will check in service layer

    const response = await checkIfFollowingService(follower,followee)
    res.status(200).json(
        ApiResponse(response,"Status check successfully ")
    )
})



