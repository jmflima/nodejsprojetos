const fs = require('fs')

const arqAntigo = "arqNovo.txt"
const arqNovo = "novoNome.txt"
fs.rename(arqAntigo, arqNovo, function(err, ){
    if(err){
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo} com sucesso`)
})