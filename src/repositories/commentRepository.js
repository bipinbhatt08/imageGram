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
export const getChildComments = async (parent,session)=>{
    const childs = await Comment.find({parent}).sort({createdAt:-1}).populate({
        path:'user',
        select:'username email'
    }).session(session)// if we put sesion in find. that will only work for find not for other so bahir arakheko
    return childs
}

export const getCommentWithOwners = async(id)=>{
    const response = await Comment.findById(id).populate({ path: "user", select: "username email" }).populate({ path: "post", select: "user" })
    return response
}

export const deleteComment = async(id,session)=>{
    const comment =  await Comment.findOneAndDelete({_id:id},{session})
    return comment
}

export const deleteChildComments = async(parent,session)=>{
    const response = await Comment.deleteMany({parent},{session})
    return response
}