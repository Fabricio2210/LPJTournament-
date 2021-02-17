const input = require('fs').readFileSync('stdinB', 'utf8');
let [hora1,min1,hora2,min2] = input.split(' ').map(numero => parseInt(numero));

if(hora1 > 24){
    hora1 = 24
}

if(min1 > 59){
    min1 = 59
}
if(hora2 > 24){
    hora2 = 24
}

if(min2 > 59){
    min2 = 59
}

let dif = (hora2 - hora1) * 60 + (min2 - min1);
let proximoDia = hora1 - (24 + hora2)
let dif2 = ((proximoDia) * 60 + (min2 -min1)) * -1

if(hora1 + min1 + hora2 + min2 === 0){
    process.exit()
}

if(Math.sign(dif) === -1){
    console.log(dif2)
}else{
    console.log(dif)
}
   
 