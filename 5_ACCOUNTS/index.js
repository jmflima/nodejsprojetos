//modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require("fs")

operation()

function operation() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'A opção selecionada foi',
                choices: [
                    'Criar Conta',
                    'Depositar',
                    'Consultar Saldo',
                    'Sacar',
                    'Sair'
                ],
            },
        ])
        .then((resposta) => {
            const opcao = resposta['action']

            if(opcao === "Criar Conta"){
                criarConta()
            } else if(opcao === "Depositar"){
                fazerDepositos()
            } else if(opcao === "Consultar Saldo"){
                consultarSaldo()
            } else if(opcao === "Sacar"){
                fazerSaques()
            } else {
                console.log(chalk.bgBlue.black("Logout feito con sucesso"))
                process.exit()  // finaliza o programa
            }
        })
        .catch((err) => console.log(err))

        //criar conta
        function criarConta(){
            console.log(chalk.bgGreen.black("Parbéns por escolher nosso banco!"))
            console.log(chalk.green("Defina as opções de sua conta a seguir"))

            buildAccount()
        }
        function buildAccount(){
            inquirer.prompt([
                {
                    name: 'nomeDaConta',
                    message: 'Digite um nome para sua conta: ' 
                }    
            ]).then(resposta => {
                const nomeConta = resposta['nomeDaConta']
                //console.info(nomeConta)
                //criando um diretório para as contas
                if(!fs.existsSync("contas")) {
                    fs.mkdirSync('contas')
                }

                if(checaContaExiste(nomeConta)) {
                    console.log(chalk.bgRed.black(`A conta ${nomeConta} já foi criada. Tente outro nome`))
                    buildAccount()
                } else {
                    fs.writeFileSync(`contas/${nomeConta}.json`,
                        '{"balance": 0}',
                        function(err){
                            console.log(err)
                        },
                        console.log(chalk.green(`Parabéns, a sua conta ${nomeConta} foi criada com sucesso`))
                    )
                    return operation()
                } 
               }).catch(err => console.log(err))
        }

        function fazerDepositos(){
            inquirer.prompt([
                {
                    name: 'nomedaConta',
                    message: 'Em qual conta deseja depositar?'
                }
            ])
            .then(resp => {
                const nomeconta = resp['nomedaConta']
                if(!checaContaExiste(nomeconta)){
                    return fazerDepositos()
                }

                inquirer.prompt([
                    {
                        name: 'valor',
                        message: 'Qual valor a ser depositado?'
                    }
                ])
                .then(resp => {
                    const valDeposito = resp['valor']
                    addDeposito(nomeconta, valDeposito)

                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

        }

        function consultarSaldo(){

            inquirer.prompt([
                {
                    name: 'nomeConta',
                    message: 'Qual a conta deseja consultar saldo?'
                }
            ])
            .then(resp => {
                const nomeconta = resp['nomeConta']
                if(!checaContaExiste(nomeconta)){
                    return consultarSaldo()
                }
                const accountData = getConta(nomeconta)
                const saldo = `O saldo da conta ${nomeconta} é: R$${parseFloat(accountData.balance)}`
                if(parseFloat(accountData.balance) > 0) {
                    console.log(chalk.bgGreen.black(saldo))
                } else{
                    console.log(chalk.bgRed.black(saldo))
                }
                return operation()
            })
            .catch(err => console.log(err))

        }

        function fazerSaques(){
            inquirer.prompt([
                {
                    name: 'nomedaConta',
                    message: 'Em qual conta deseja efetuar o saque?'
                }
            ])
            .then(resp => {
                const nomeconta = resp['nomedaConta']
                if(!checaContaExiste(nomeconta)){
                    return fazerSaques()
                }

                inquirer.prompt([
                    {
                        name: 'valor',
                        message: 'Qual valor a ser sacado?'
                    }
                ])
                .then(resp => {
                    const valSaque = resp['valor']
                    fazSaque(nomeconta, valSaque)

                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

        }

        function checaContaExiste(nomeconta){
 //           console.log(`estou aqui com a conta ${nomeconta}`)
 //           process.exit
            if(!fs.existsSync(`contas/${nomeconta}.json`)){
                console.log(chalk.bgRed.black(`A conta ${nomeconta} não existe. Tente outro nome`))
                return false
            }
            return true
        }

        function addDeposito(nomeconta, valDeposito){
            const accountData = getConta(nomeconta)
            if(!valDeposito){
                console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente.'))
                return fazerDepositos()
            }

            accountData.balance = parseFloat(valDeposito) + parseFloat(accountData.balance)

            fs.writeFileSync(
                `contas/${nomeconta}.json`,
                JSON.stringify(accountData),
                function(err){console.log(err)},
            )
            console.log(chalk.bgGreen.black(`Depósito de R$${valDeposito} efetuado com sucesso!`))
            console.clear
            return operation()
        }

        function fazSaque(nomeconta, valSaque){
            const accountData = getConta(nomeconta)
            const saldo = parseFloat(accountData.balance)
            if(!valSaque){
                console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente.'))
                return fazerSaques()
            }else if(valSaque > saldo){
                console.log(chalk.bgRed.black(`Você não tem saldo sufuciente para sacar R$${valSaque}. Operação encerrada`))
            }else{

                accountData.balance = saldo - parseFloat(valSaque)

                fs.writeFileSync(
                    `contas/${nomeconta}.json`,
                    JSON.stringify(accountData),
                    function(err){console.log(err)},
                )
                console.log(chalk.bgGreen.black(`Saque de R$${valSaque} foi efetuado com sucesso!`))
            }
            console.clear
            return operation()
        }


        function getConta(nomeconta){
           const contaJSON = fs.readFileSync(`contas/${nomeconta}.json`,{
               encoding: 'utf8',
               flag: 'r',
           })
           return JSON.parse(contaJSON)
        }
  
}