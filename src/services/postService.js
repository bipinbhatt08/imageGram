
import { createPost } from "../repositories/postRepository.js"
export const createPostService = async(createPostObject)=>{

    // this is the core business logic part .. first write al the steps then code ok??÷

    // 1. take the image from the. post and upload on aws
    // 2 . get the url of object from the aws response
    // 3. return the post object 

    const caption = createPostObject.caption?.trim()
    const image = createPostObject.image
    // user will be added later
    // call the repository to talk with the database
    const post  = await createPost(caption,image)
    return post
}