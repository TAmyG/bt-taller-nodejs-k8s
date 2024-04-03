const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 4001;
/**
 * {
 *  '09ae485': [comentario1, comentario2, ...comentariox]
 * }
 */
const comentariosPostId = {};

app.post('/posts/:id/comments', async(req, res) => {
    const comentarioId = randomBytes(4).toString('hex');
    const {contenido} = req.body;

    const comentarios = comentariosPostId[req.params.id] || [];
    comentarios.push({
        id: comentarioId,
        contenido,
        status: 'pendiente'
    });

    comentariosPostId[req.params.id] = comentarios;

    //Notificar al MQ que se acaba de crear un post
    await axios.post('http://localhost:4005/events', {
        type: 'ComentarioCreado',
        data: {
            id: comentarioId,
            contenido,
            postId: req.params.id,
            status: 'pendiente'
        }
    }). catch(err=>{
        console.error(err)
    })
    res.status(201).send(comentarios);
})


app.get('/posts/:id/comments', (req, res)=>{
    res.send(comentariosPostId[req.params.id] || []);
})

app.post('/events', (req, res)=>{
    console.log('Evento recibido: ', req.body.type)
    res.send({});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})