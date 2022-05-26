const chalk = require("chalk")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual é a sua linguagem preferida?', (linguagem) => {
    if(linguagem === 'vb') {
        console.log(chalk.bgRed("isso nem é linguagem"))
    }else{
        console.log(chalk.black.bgWhite(`A minha linguagem preferida é ${linguagem}`))
    }
    readline.close()
})