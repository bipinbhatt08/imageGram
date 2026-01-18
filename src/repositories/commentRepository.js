import Comment from "../schema/comment.js"
import user from "../schema/user.js"

export const createComment = async (user,post,content,parent=null)=>{
    const comment = await Comment.create({user,post,content,parent})
    return comment
}

export const findCommentById = async(id) =>{
    const comment = await Comment.findById(id)
    return comment
}
export const getAllComments = async (post,limit,offset)=>{
    const comments = await Comment.find({post}) .sort({ createdAt: -1 }).limit(limit).skip(offset).populate({path: 'user', select: 'username email' })
    const count = await Comment.countDocuments({post})
    return {comments,count }
}
export const getChildComments = async (parent)=>{
    const childs = await Comment.find({parent}).sort({createdAt:-1}).populate({
        path:'user',
        select:'username email'
    })
    return childs
}

export const getCommentWithOwners = async(id)=>{
    const response = await Comment.findById(id).populate({ path: "user", select: "username email" }).populate({ path: "post", select: "user" })
    return response
}

export const deleteComment = async(id)=>{
    const reponse = await Comment.findByIdAndDelete(id)
    return reponse
}