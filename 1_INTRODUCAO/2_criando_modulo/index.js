const fs = require('fs') // file system

fs.readFile('arquivo.txt', 'utf8', (erro, dados) => {

    if(erro) {
        console.log(erro)
    }
    console.log(dados)
});