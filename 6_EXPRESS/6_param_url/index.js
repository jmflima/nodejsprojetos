const express = require('express')

const app = express() // inicializa o express
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, resp) => {
    const id = req.params.id

    // leitura da tabela users e resgatar um determinado registro
    console.log(`Estamos buscando o usuário ${id}`)

    resp.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})