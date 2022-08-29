var arreglo = ['true', 'false', '2', 'true', '1', 'false', 'true'];
var cont=0;
for(let i=0; i<arreglo.length; i++) {
    if(arreglo[i] == 'true'){
        cont++;
    }
}
console.log("Hay "+cont+" true's en el arreglo");