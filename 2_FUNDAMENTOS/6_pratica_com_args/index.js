//modulo externo
const minimist = require('minimist')

//modulo interno
const somando = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

//node index.js --a=10 --b=5
somando(a, b)