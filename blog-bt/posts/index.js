const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 4000
const posts = {};

app.post('/posts/create', async(req, res) => {
    const id = randomBytes(4).toString('hex');
    const {titulo} = req.body;
    posts[id]= {
        id: id,
        titulo: titulo
    }

    //Notificar al MQ que se acaba de crear un post
    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreado',
        data: {
            id: id,
            titulo: titulo
        }
    }). catch(err=>{
        console.error(err)
    })
    res.send(posts[id]);
})

app.get('/posts', (req, res)=>{
    res.send(posts)
})


app.post('/events', (req, res)=>{
    console.log('Evento recibido: ', req.body.type)
    res.send({});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})