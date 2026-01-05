import express from 'express'
import connectDB from './config/dbConfig.js'
import { createPost, deletePostById, getAllPosts, getPostById } from '../src/controllers/postController.js'
import { uploader } from './config/multerConfig.js'
const app = express() // this app is a server object instance
const PORT = 3000

// “For every incoming request, execute this function before reaching route handlers.”
app.use(express.json())// we use app.use() to add any middleware to every single request. 
app.use(express.text())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    return res.send('Home')
})
app.get('/ping',(req,res)=>{
    res.json({
        message:"Pong"
    })
})

app.post('/posts',uploader.single('image'),createPost)
app.get('/posts',getAllPosts)
app.delete('/posts/:id',deletePostById)
app.get('/posts/:id',getPostById)

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
    connectDB()
})
