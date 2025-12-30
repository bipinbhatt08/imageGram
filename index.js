import express from 'express'
const app = express() // this app is a server object instance
const PORT = 3000


app.get('/',(req,res)=>{
    return res.send('Home')
})
app.get('/ping',(req,res)=>{
    res.json({
        message:"Pong"
    })
})
app.get('/hello',(req,res)=>{
    res.json({
        message:"hello world!"
    })
})

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})
