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
    console.log(respostas)
    const media = (parseInt(respostas.p1) + parseInt(respostas.p2)) / 2
    console.log(`A média das notas é ${media}`)
}).catch((erro) => console.log(erro))