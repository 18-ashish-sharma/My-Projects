  
const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.use(express.static('src'))

app.get('/', async (req, res) => {
    res.sendFile('./src/index.html')
})

app.listen(port , (req, res) => console.log('Server Started'))