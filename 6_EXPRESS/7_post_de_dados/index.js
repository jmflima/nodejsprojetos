const express = require('express')

const app = express() // inicializa o express
const port = 3000

const path = require('path')

//ler o body
app.use(
    express.urlencoded({
        extend: true,
    })
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const idade = req.body.age
    console.log(`Nome: ${name}`)
    console.log(`Idade: ${idade}`)

    res.sendFile(`${basePath}/userForm.html`)

})

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

