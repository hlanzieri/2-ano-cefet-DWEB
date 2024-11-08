const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entre com seu nome:', (input)=>{
console.log('Seu nome é: ${input}');
rl.close();
});
