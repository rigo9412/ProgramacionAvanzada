const arreglo = ['true', 'false', '2', 'true', '1', 'false', 'true'];

for(let i=0; i<arreglo.length; i++) {
    if(arreglo[i]='true'){
        cont=cont+1;
    }
  console.log(`Element at index ${i} is ${arreglo[i]}`);
}