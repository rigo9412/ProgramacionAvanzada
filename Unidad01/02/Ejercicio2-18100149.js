
/*let Numero = 4

for(let i= Numero; i>=-1; i--)
 {
      console.log("Número: " + (i+1))
 }*/

 
let numero = 9

function ReducirNumeros (numero) {
  if(numero === -1) return;
    
console.log(numero);
return ReducirNumeros(numero-1);
}

console.log(ReducirNumeros(numero))