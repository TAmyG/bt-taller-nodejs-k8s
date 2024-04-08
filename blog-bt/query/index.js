const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 4002
const posts = {};

app.post('/events', (req, res)=>{
    const {type, data} = req.body;
    console.log('Evento recibido: ', type);

    if(type === 'PostCreado'){
        // obtener id y titulo
        // crear el post respectivo con id, titulo y comentarios vacios
        const {id, titulo} = data;
        posts[id] = {id, titulo, comentarios: []};
    }

    if(type === 'ComentarioCreado'){
        // id, contenido, postId, status
        // buscar el post con postId
        // crear el comentario en la lista de comentarios
        const { id, contenido, postId, status } = data;
        const post = posts[postId];
        post.comentarios.push({id, contenido, status});
    }

    if(type === 'ComentarioActualizado'){
        const {id, status, contenido, postId} = data;
        const post = posts[postId];
        const comentario = post.comentarios.find((comment)=>{
            return comment.id === id;
        })
        comentario.status = status;
        comentario.contenido = contenido
    }
    res.send({});
})

app.get('/posts', (req, res)=>{
    res.send(posts);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})