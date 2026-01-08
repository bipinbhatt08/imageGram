import { createPostService, deletePostService, getAllPostService, getPostByIdService, updatePostByIdService } from "../services/postService.js"

export const createPost = async(req,res)=>{
    try {
        // call the service layer funciton 

        console.log(req.file, "I am from controller.")
        if(!req.file || !req.file.location){
            return res.status(400).json({
            success:false,
            message: "Image is required",
     
        })

        }
        const post  =  await createPostService({
            caption: req.body.caption,
            image: req.file.location
        })
    
        return res.status(201).json({
            success: true,
            message:"Post created successfully.",
            data: post
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "Internal server error.",
     
        })
    }
}
//api/v1/posts?limit=10&offset=0
export const getAllPosts = async(req,res)=>{

   try {
     const limit = req.query.limit || 10
     const offset = req.query.offset || 0
 
     const data = await getAllPostService(offset,limit)
     return res.status(200).json({
         success: true,
         message: "Post fetched succesfully.",
         data: data,
         
         
     })
   } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "Internal server error.",
            
        })
   }
}

export  const getPostById = async(req,res)=>{
    try {
        const post  = await getPostByIdService(req.params.id)
        return res.status(200).json({
            success: true,
            message: "Post fetched succesfully.",
            data: post
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "Internal server error.",
            
        })
    }
}
export const deletePostById = async(req,res)=>{
    try {
        const response = await deletePostService(req.params.id)
        if(!response){
            return res.status(404).json({
            success:false,
            message: "Post not found",
        })
        }
        return res.status(200).json({
            success: true,
            message: "Post deleted succesfully.",
            data: response
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "Internal server error.",
            
        })
    }
}

export const updatePostById = async(req,res)=>{
    try {
        const updateObject  = req.body
        
        if(req.file){
            updateObject.image = req.file.location 
        }
        const response = await updatePostByIdService(req.params.id,updateObject)
        return res.status(200).json({
            success: true,
            message: "Post updated succesfully.",
            data: response
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message: "Internal server error.",
            
        })
    }
}
