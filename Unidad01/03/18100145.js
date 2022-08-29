
var array = [true, true, true, true, true,'true'];

var contador=0;

for(let i=0; i < array.length; i++) 
{
    if(array[i] == true)
    {
        contador++;
    }

}

console.log(contador);