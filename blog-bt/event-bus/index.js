const express = require('express')
const bodyParser = require('body-parser')
const { default: axios } = require('axios')

const app = express()
app.use(bodyParser.json())


const port = 4005
const eventos = [];

app.post('/events', (req, res)=>{
    const evento = req.body;

    eventos.push(evento);
    console.log('Event Bus: ', evento.type)

    // Logica para enviar eventos a los consumers
    axios.post('http://localhost:4000/events', evento).catch(err=>{console.error(err.message)})
    axios.post('http://localhost:4001/events', evento).catch(err=>{console.error(err.message)})

    res.send({status: 'OK'});
});

app.get('/events', (req, res)=>{
    res.send(eventos);
})

app.listen(port, () => {
    console.log(`Event Bus app listening on port ${port}`)
})