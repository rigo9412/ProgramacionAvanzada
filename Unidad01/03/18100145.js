




let Arreglo = ['true','true'];
let cont = 0;


if(!(Array.isArray(Arreglo)))
{
   
    console.log("Necesita un arreglo");
    
    
}
else
{
    if(!Arreglo.length)
    {
        console.log("Es un arreglo pero esta vacio")
    }
    else
    {
        cont = Arreglo.filter( i => i === 'true').length;
        console.log(cont);
    }
    
    
    

}


