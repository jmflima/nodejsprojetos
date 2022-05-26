const url = require('url')

const endereco = 'http://www.meusite.com.br/catalog?produtos=cadeira'
const passandoUrl = new url.URL(endereco)

console.log(passandoUrl.host)
console.log(passandoUrl.pathname)
console.log(passandoUrl.search)
console.log(passandoUrl.searchParams)
console.log(passandoUrl.searchParams.get('produtos'))
