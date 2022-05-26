const chalk = require("chalk")

// const nota = 6

// if(nota > 6){

//     console.log(chalk.green.bold(`Parabéns, você está APROVADO! Sua nota foi ${nota}`))
// }else{
//     console.log(chalk.bgWhite.black.bold(`Ainda não foi dessa vez, você está REPROVADO! Sua nota foi ${nota}`))

// }

 const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'p1',
    message: 'Qual a primeira nota? ',
},
{
    name: 'p2',
    message: 'Qual a segunda nota? ',
},
]).then((respostas) => {
    console.log(chalk.bgYellow.black(`Nota 01= ${respostas.p1}`, `Nota 02= ${respostas.p2}`))
    const media = (parseInt(respostas.p1) + parseInt(respostas.p2)) / 2
    console.log(chalk.bgRed(`A média das notas é ${media}`))
}).catch((erro) => console.log(erro))