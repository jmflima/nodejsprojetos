const express = require('express')

const app = express() // inicializa o express
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})