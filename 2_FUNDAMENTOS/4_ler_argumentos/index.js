// nome

console.log(process.argv)

const arg = process.argv.slice(2)

console.log(arg)

const nome = arg[0].split('=')[1]

console.log(nome)

const idade = arg[1].split('=')[1]
console.log(idade)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos.`)