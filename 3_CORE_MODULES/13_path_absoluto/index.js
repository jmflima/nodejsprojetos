const path = require('path')

//path absoluto
console.log(path.resolve('texte.txt'))

//formar path
const midFolder = 'relatorios'
const fileNme = 'joao.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileNme)

console.log(finalPath)