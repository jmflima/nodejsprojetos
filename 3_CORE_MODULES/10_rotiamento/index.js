const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)

    if(filename.includes('html')){
        if(fs.existsSync(filename)) {
            fs.readFile(filename, function(err, dados){
                res.writeHead(200, {'Constants-type': 'text/html'})
                res.write(dados)
                return res.end()
            })
        } else {
            fs.readFile('404Erro.html', function(err, dados){
                res.writeHead(404, {'Constants-type': 'text/html'})
                res.write(dados)
                return res.end()
            })
        }
    }

 }) 

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})