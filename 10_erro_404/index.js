const express = require('express')

const app = express() // inicializa o express
const port = 3000

const path = require('path')

const userRouter = require('./users') //importando as rotas

//ler o body
app.use(
    express.urlencoded({
        extend: true,
    })
)

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', userRouter)

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})

//Erro 404
// app.use(function(req, res, next) {
//     res.status(404).sendFile(`${basePath}/404.html`)
// })

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

