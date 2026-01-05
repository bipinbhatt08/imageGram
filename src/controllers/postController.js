import { createPostService, deletePostService, getAllPostService, getPostByIdService } from "../services/postService.js"
export const createPost = async(req,res)=>{
    console.log(req.file)

    // call the service layer funciton 
    const post  =  await createPostService({
        caption: req.body.caption,
        image: req.file.location
    })

    return res.status(201).json({
        success: true,
        message:"Post created successfully.",
        data: post
    })
}

export const getAllPosts = async(req,res)=>{
    const posts = await getAllPostService()
    return res.status(200).json({
        success: true,
        message: "Post fetched succesfully.",
        data: posts
    })
}

export  const getPostById = async(req,res)=>{
    const post  = await getPostByIdService(req.params.id)
    return res.status(200).json({
        success: true,
        message: "Post fetched succesfully.",
        data: post
    })
}
export const deletePostById = async(req,res)=>{
    const post = await deletePostService(req.params.id)
    return res.status(200).json({
        success: true,
        message: "Post deleted succesfully.",
        data: post
    })
}
