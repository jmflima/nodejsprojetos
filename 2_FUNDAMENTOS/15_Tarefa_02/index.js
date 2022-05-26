const chalk = require("chalk")
const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'nome',
    message: 'Informe aqui o seu nome: ',
},
{
    name: 'idade',
    message: 'Você tem quantos anos? ',
},
]).then((respostas) => {

    if(!respostas.nome || !respostas.idade){
        throw new Error('necessário informar o Nome e a Idade!')
    }
    const resultado = `O nome é ${respostas.nome} e a idade = ${respostas.idade} anos`
    console.log(chalk.bgYellow.black(resultado))
    
    console.log(chalk.bgYellow.black(`O nome é ${respostas.nome} e a idade = ${respostas.idade} anos`))
    
}).catch((err) => console.log(chalk.bgRed(`Aconteceu um imprevisto: ${err}`)))