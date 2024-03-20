const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send({ data: 'Hello World! XD' })
})

app.get('/ejemplo', (req, res) => {
    res.send({ data: 'Este es un ejemplo' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})