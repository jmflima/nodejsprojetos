const chalk = require("chalk")

const nota = 6

if(nota > 6){

    console.log(chalk.green.bold(`Parabéns, você está APROVADO! Sua nota foi ${nota}`))
}else{
    console.log(chalk.bgWhite.black.bold(`Ainda não foi dessa vez, você está REPROVADO! Sua nota foi ${nota}`))

}
