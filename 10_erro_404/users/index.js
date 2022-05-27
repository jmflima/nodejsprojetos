const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const idade = req.body.age
    console.log(`Nome: ${name}`)
    console.log(`Idade: ${idade}`)

    res.sendFile(`${basePath}/userForm.html`)

})

router.get('/:id', (req, resp) => {
    const id = req.params.id

    // leitura da tabela users e resgatar um determinado registro
    console.log(`Estamos buscando o usuário ${id}`)

    resp.sendFile(`${basePath}/users.html`)
})

module.exports = router