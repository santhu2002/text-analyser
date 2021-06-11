const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})
app.get('/info.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'info.html'))
})
app.all('*',(req,res)=>{
     res.status(404).send('Resource not found...')
    //  '<a href='/'>home</a>')
})
app.listen(80,()=>{
    console.log("server is listening on port 80....")
})



