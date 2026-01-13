import Post from '../schema/post.js'

export const createPost = async (caption, image, user) => {
    const newPost = await Post.create({ caption, image, user })
    return newPost

    // const newPost = new Post({caption,image,user}) // this creates post object in memory
    // // it does not create the entry in the database
    // // to create entry in the database we call save() function
    // await newPost.save()
}

export const findAllPosts = async (offset, limit) => {
    const posts = await Post.find().sort({ createdAt: -1 }).skip(offset).limit(limit)
    return posts
}

export const countAllPosts = async () => {
    const count = await Post.countDocuments()
    return count
}

export const findPostById = async (id) => {
    const post = await Post.findById(id)
    return post
}

export const deletePost= async ({user,_id}) => {
    const response = await Post.findOneAndDelete({_id,user})
    return response
}

export const updatePostById = async(id,updateObject)=>{
    const post = await Post.findByIdAndUpdate(id,updateObject,{new:true})
    return post
    //new true will make mongoose to return updated document. otherwise it will give us the old documnet not the updated ond
}

export const findPostByUserId = async (userId) => {
    // function implementation still empty
    const post = await Post.findOne({user:userId})
    return post
}
