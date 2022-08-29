datos = [true, false,true,true,false]
Trepetidas =0;

for(i=0; i < datos.length; i++)
{
    if(datos[i] === true){
        Trepetidas++;
    }
   
}

    console.log("Registros totales con valor verdadero: " + Trepetidas);
