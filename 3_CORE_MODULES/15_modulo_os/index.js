const os = require("os")

console.log("Host Name: " + os.hostname())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.type())