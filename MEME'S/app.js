  
const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.use(express.static('code'))

app.get('/', async (req, res) => {
    res.sendFile('./code/index.html')
})

app.listen(port , (req, res) => console.log('Server Started'))