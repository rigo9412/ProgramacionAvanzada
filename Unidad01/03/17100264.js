prueba = [true, false,true,true,false, true]
trues =0;

for(i=0; i < prueba.length; i++)
{
    if(prueba[i] === true){
        trues++;
    }
   
}

    console.log("Registros totales con valor verdadero: " + trues);