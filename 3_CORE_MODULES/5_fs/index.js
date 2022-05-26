const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
 
    fs.readFile('mensagem.html', function(err, dados){
        res.writeHead(200, {'Constants-type': 'text/html'})
        res.write(dados)
        return res.end()
    })
 })

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})