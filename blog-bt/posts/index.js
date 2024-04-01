const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 8000
const posts = {};

app.post('/posts/create', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {titulo} = req.body;
    posts[id]= {
        id: id,
        titulo: titulo
    }
    res.send(posts[id]);
})

app.get('/posts', (req, res)=>{
    res.send(posts)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})