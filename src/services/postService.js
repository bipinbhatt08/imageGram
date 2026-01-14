import { countAllPosts, createPost, deletePost, findAllPosts, findPostById, findPostByUserId, updatePostById } from "../repositories/postRepository.js"
import ApiError from "../utils/apiErrorHandler.js"
import { getUserProfileService } from "./userService.js"
export const createPostService = async(createPostObject)=>{

    // this is the core business logic part .. first write al the steps then code ok??÷

    // 1. take the image from the. post and upload on aws
    // 2 . get the url of object from the aws response
    // 3. return the post object 

    const caption = createPostObject.caption?.trim()
    const {image,user } = createPostObject
    
    // call the repository to talk with the database
    const post  = await createPost(caption,image,user)
    return post
}

export const getAllPostService = async(offset,limit)=>{
    const posts = await findAllPosts(offset,limit)
    //calculate total number of page and total number of posts
    const totalDocuments = await countAllPosts()
    const totalPages = Math.ceil(totalDocuments / limit)
    return {posts,totalDocuments,totalPages}
}

export const getPostByIdService = async(postId)=>{
    const post = await findPostById(postId)
    return post
}

export const deletePostService = async({postId,user})=>{
    
    const response = await deletePost({_id:postId,user})
    if(!response){
        const exists = await findPostById(postId);
        if(!exists) throw new ApiError(404,"Post not found");
         throw new ApiError(403,"Unauthorized");
    }
    return response

}

export const updatePostService = async(_id,user,updateObject)=>{
    const response = await updatePostById(_id,user,updateObject)
    if(!response){
        const exists = await findPostById(_id);
        if(!exists) throw new ApiError(404,"Post not found");
         throw new ApiError(403,"Unauthorized");
    }
    return response
}

export const getPostByUserIdService = async(userId,order)=>{
    getUserProfileService(userId)// throw 404 if not found
    const response  = await findPostByUserId(userId,order)
    return response
}