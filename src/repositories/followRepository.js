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
export const getFollowers = async(followee)=>{
    const followers = await Follow.find({followee}).sort({createdAt: 1}).populate({
        path:'follower',
        select: 'username email '
    })
    const count = await Follow.countDocuments({followee})
    return {followers,count}
}

export const getFollowing = async(follower)=>{
    const following = await Follow.find({follower}).sort({createdAt: 1}).populate({
        path:'followee',
        select: 'username email '
    })
    const count = await Follow.countDocuments({follower})
    return {following,count}
}