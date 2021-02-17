const input = require('fs').readFileSync('stdinE', 'utf8');
const numeros = input.split(' ').map(numero => parseInt(numero));

let impar = numeros.filter(n => n%2);
let par = numeros.filter(n => n%2 === 0);
let ascendPar = par.sort((a,b) => a - b);
let descendImpar = impar.sort((a,b) => b - a);
let finalArray = ascendPar.concat(descendImpar);

finalArray.forEach((numeros) =>{
    console.log(numeros)
});