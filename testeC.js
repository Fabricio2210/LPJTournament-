const input = require('fs').readFileSync('stdinc', 'utf8');
const numeros = input.split(' ').map(numero => parseInt(numero));

let verificaNumeros = numeros.map((numero) => {
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  });

  verificaNumeros.forEach((numeros) =>{
      if(numeros == false){
          console.log("Not Prime")
      }else if(numeros == true){
          console.log("Prime")
      }
  })
  
