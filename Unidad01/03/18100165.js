var arreglo = ['true', 'false', '2', 'true', '1', 'false', 'true'];
var cont=0;

if(arreglo.length=0){
  console.log ("El arreglo está vacio")
}
if(Array.isArray(arreglo)){
for(let i=0; i<arreglo.length; i++) {
    if(arreglo[i] == 'true'){
        cont++;
    }
}
}
else{
  console.log("Arreglo invalido")
}
console.log("Hay "+cont+" true's en el arreglo");