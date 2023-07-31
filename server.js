const express =require('express')
const bodyparser=require('body-parser')
const axios=require('axios')
const trainsrouter=require('./routes/trains')
const {Mongouser} = require('mongodb')
const app=express()
const port=3500

app.use(bodyparser.json())

app.use('/trains',trainsrouter)

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})
