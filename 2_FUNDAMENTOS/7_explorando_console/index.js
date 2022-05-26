//mais de um valor

const x = 10
const y = 'João Lima'
const z = [1, 2]

console.log(x, y, z)

//contagem de impressões

console.count(`o valor de x é ${x}, contagem: `)
console.count(`o valor de x é ${x}, contagem: `)
console.count(`o valor de x é ${x}, contagem: `)
console.count(`o valor de x é ${x}, contagem: `)

//variavel entre strings
console.log(`O nome dele é %s e ele é programador`, x)

//limpar o console
setTimeout(() => {
    console.clear()
}, 2000)
