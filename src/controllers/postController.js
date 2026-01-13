import { createPostService, deletePostService, getAllPostService, getPostByIdService, updatePostByIdService } from "../services/postService.js"
import ApiError from "../utils/apiErrorHandler.js"
import ApiResponse from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"

export const createPost = asyncHandler(async(req,res)=>{
    
        // call the service layer funciton `
        if(!req.file || !req.file.location){
            throw new ApiError(400, "Image is required")
        }
        const post  =  await createPostService({
            caption: req.body.caption,
            image: req.file.location,
            user : req.user._id
        })
    
        return res.status(201).json(ApiResponse(post,"Post created successfully."))
})
//api/v1/posts?limit=10&offset=0
export const getAllPosts = asyncHandler(async(req,res)=>{

     const limit = req.query.limit || 10
     const offset = req.query.offset || 0
 
     const data = await getAllPostService(offset,limit)
     return res.status(200).json(ApiResponse(data,"Post fetched successfully."))
   
})

export  const getPostById = asyncHandler(async(req,res)=>{
    
        const post  = await getPostByIdService(req.params.id)
        if(!post) throw new ApiError(404,"Post not found")
        return res.status(200).json(ApiResponse(post,"Post fetched successfully."))
    
})
export const deletePostById = asyncHandler(async(req,res)=>{
        const response = await deletePostService(req.params.id)
        if(!response){
            throw new ApiError(404,"Post not found")
        }
        return res.status(200).json(ApiResponse(response,"Post deleted successfully."))
})
export const updatePostById = asyncHandler(async(req,res)=>{
   
        const updateObject  = req.body
        
        if(req.file){
            updateObject.image = req.file.location 
        }
        const response = await updatePostByIdService(req.params.id,updateObject)
        if(!response){
            throw new ApiError(404,"Post not found.")
        }
        return res.status(200).json(ApiResponse(response,"Post updated successfully."))
}
)