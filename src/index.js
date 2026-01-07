import express from 'express'
import connectDB from './config/dbConfig.js'

import apiRouter from './routing/apiRouter.js'

const app = express() // this app is a server object instance
const PORT = 3000

// “For every incoming request, execute this function before reaching route handlers.”
app.use(express.json())// we use app.use() to add any middleware to every single request. 
app.use(express.text())
app.use(express.urlencoded())


app.use('/api',apiRouter)

app.get('/ping',(req,res)=>{
    res.json({
        message:"Pong"
    })
})


app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
    connectDB()
})
