const express = require('express')

const app = express() // inicializa o express
const port = 3000

app.get('/', (req, resp) => {
    resp.send('Olá João!!')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})