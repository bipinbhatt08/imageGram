import Post from "../schema/post";


export const createPost = async(caption,image,user)=>{
    try {
        // const newPost = await Post.create({caption,image,user})
        // return newPost

        const newPost = new Post({caption,image,user})//this create post object in the memory
        //it does not create the entry in the database
        //to create entry in the database we call save() funciton
        await newPost.save()
        
    } catch (error) {
        console.log(error)
    }
}
export const findAllPosts = async()=>{
    try {
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error)
    }
}
export const findPostById = async(id)=>{
    try {
        const post = await Post.findById(id)
        return post
    } catch (error) {
        console.log(error)
    }
}
export const deletePostById = async(id)=>{
    try {
        const post = await Post.findByIdAndDelete(id)
        return post
    } catch (error) {
        console.log(error)
    }
}

export const  findPostByUserId = async(userId)=>{

}