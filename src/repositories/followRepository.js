import Follow from '../schema/follow.js'

export const followSomeone = async (follower,followee)=>{
    const response = await Follow.create({follower,followee})
    return response
}

export const checkIfFollowing = async(follower,followee)=>{
    const response  = await Follow.exists({follower,followee})
    return response
}

export const unFollowSomeone = async(follower,followee)=>{
    const response =  await Follow.deleteOne({follower,followee})
    return response
}