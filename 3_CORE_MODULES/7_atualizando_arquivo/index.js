const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err, dados){
            res.writeHead(200, {'Constants-type': 'text/html'})
            res.write(dados)
            return res.end()
        })
    }else{
//        const nameNewLine = name + '\r\n'
        const nameNewLine = name + ',\r\n'

        fs.appendFile('gravarquivo.txt', nameNewLine, function(err, dados) {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }

 })

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})