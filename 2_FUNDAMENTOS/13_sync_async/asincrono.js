const fs = require('fs')

console.log('Inicio')

fs.writeFile('Arquivo.txt', 'Assincrono', function(err) {
    setTimeout(function () {
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim')
