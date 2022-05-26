const fs = require('fs')

if(fs.existsSync('./novapasta')){
    fs.rmdirSync("./novapasta")
    console.log("O Diretório foi apagado")
} else {
    fs.mkdirSync("./novapasta")    
    console.log("O Diretório foi criado")
}

