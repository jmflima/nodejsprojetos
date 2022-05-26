const x = 10

//checar se x é um numero inteiro

if (!Number.isInteger(x)) {
    throw new Error('O valor de x não é um numero inteiro ')
}

console.log('Continuando o código')