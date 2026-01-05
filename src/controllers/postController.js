 import { createPostService } from "../services/postService.js"
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