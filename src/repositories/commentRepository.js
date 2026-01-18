import Comment from "../schema/comment.js"

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