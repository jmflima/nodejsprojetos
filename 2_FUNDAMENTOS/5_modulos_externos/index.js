const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

const meuNome = args["nome"]
const profissao = args["profissao"]

console.log(meuNome, profissao)

console.log(`O nome dele é ${meuNome} e sua atividade é ${profissao}`)