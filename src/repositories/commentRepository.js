import Comment from "../schema/comment.js"

export const createComment = async (user,post,content,parent=null)=>{
    const comment = await Comment.create(user,post,content,parent)
    return comment
}

export const findCommentById = async(id) =>{
    const comment = await Comment.findById(id)
    return comment
}