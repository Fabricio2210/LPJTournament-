const input = require('fs').readFileSync('stdinA', 'utf8');

const [n1,n2,n3] = input.split(' ').map(numero => parseInt(numero));
const maiorN1N2 = (n1 + n2 + Math.abs(n1 - n2)) / 2;
const maiorN3 = (n3 + maiorN1N2 + Math.abs(n3 - maiorN1N2)) / 2;

console.log(`${maiorN3} eh o maior `)