function ContarTrues(){
    let contador = 0;
    let CantTS = ['true','true','true','true','false','false','false','true'].sort();
    
    for(let x = 0; x <= CantTS.length; x++){
        if(CantTS[x] === 'true'){
        contador += 1;
        }
    }
    return contador;
  }
  
  console.log("Resultado = " + ContarTrues());


