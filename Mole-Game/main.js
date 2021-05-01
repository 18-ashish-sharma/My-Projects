const express = require('express')
const app = express()
// const port = process.env.PORT || 5000
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})


app.listen(process.env.PORT || 3000  , (req, res) => console.log('SERVER STARTED'))