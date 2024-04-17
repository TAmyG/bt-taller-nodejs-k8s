const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 4003;

app.post('/events', async(req, res)=>{
    console.log('Evento recibido: ', req.body)
    const {type, data} = req.body;
    
    if(type === 'ComentarioCreado'){
        const status = data.contenido.includes('Bantrab') ? 'rechazado' : 'aprobado';

        await axios.post('http://event-bus-srv:4005/events', {
        type: 'ComentarioModerado',
        data: {
            id: data.id,
            contenido: data.contenido,
            postId: data.postId,
            status: status
        }
    }). catch(err=>{
        console.error(err)
    })

    }

    res.send({});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})