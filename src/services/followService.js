import ApiError from '../utils/apiErrorHandler.js'
import {getUserProfileService} from './userService.js'
import { checkIfFollowing,followSomeone,unFollowSomeone } from '../repositories/followRepository.js'

export const followSomeoneService = async(follower, followee)=>{
    // check if followee exists
    await getUserProfileService(followee)// it will throw error if use does not exist..so no need to check it


    //check if user trying to follow itself
    if(followee.toString()===follower.toString()){
        throw new ApiError(400, "You can not follow yourself")
    }

    //if already following
    const alreadyFollowing = await checkIfFollowingService(follower,followee,false)
    if(alreadyFollowing){
        throw new ApiError(400, "Already following this user")
    }
    
    //now follow
    const response = await followSomeone(follower,followee)
    return response
    
}

export const checkIfFollowingService = async(follower,followee,validateFollowee = true)=>{
    if(validateFollowee){
        await getUserProfileService(followee)// it will throw error if use does not exist..so no need to check it
    }
    const  response = await checkIfFollowing(follower,followee)
    return !!response //if null then !!null  false hunxa if empty object it will be true
}
export const unFollowSomeoneService = async(follower, followee)=>{
    //if following
    const alreadyFollowing = await checkIfFollowingService(follower,followee,true)
    if(!alreadyFollowing){
        throw new ApiError(400, "You are not following this user")
    }

    //now unfollow
    await unFollowSomeone(follower,followee)
    return null
    
}