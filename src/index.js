import express from 'express'
import connectDB from './config/dbConfig.js'

import apiRouter from './routing/apiRouter.js'
import globalErrorHandler from './utils/globalErrorHandler.js'
import ip from 'ip'

const app = express() // this app is a server object instance
const PORT = 3000

// “For every incoming request, execute this function before reaching route handlers.”
app.use(express.json())// we use app.use() to add any middleware to every single request. 

app.use(express.urlencoded({extended:true})) //extended: true → Can parse nested objects (deep objects, arrays)


app.use('/api',apiRouter)

app.get('/ping',(req,res)=>{

    const ipaddr = ip.address()
    res.json({
        message:"Pong" + ipaddr
    })
})

app.use(globalErrorHandler)

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
    connectDB()
})


// client -----> lb --->server 2
//                  --->server 2