const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 2000
mongoose.connect('mongodb://localhost:27017/Candidates',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false,},(err)=>{
    if(err) return console.log(err)
    console.log('db connected')
})

app.use(express.json())

app.use('/',require('./routes/candidate'))


app.listen(port,console.log(`server running on port ${port}`))