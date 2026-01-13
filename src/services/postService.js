import { countAllPosts, createPost, deletePost, findAllPosts, findPostById, updatePostById } from "../repositories/postRepository.js"
import ApiError from "../utils/apiErrorHandler.js"
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

export const updatePostByIdService = async(id,updateObject)=>{
    const response = await updatePostById(id,updateObject)
    return response
}