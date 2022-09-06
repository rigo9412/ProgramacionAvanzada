/*function ContarTrues(){
    let contador = 0;
    let CantTS = ['true','true','true','true','false','false','false','true'].sort();
    
    for(let x = 0; x <= CantTS.length; x++){
        if(CantTS[x] === 'true'){
        contador += 1;
        }
    }
    return contador;
  }
  
  console.log("Resultado = " + ContarTrues());*/

  function ContarTrues(){
    let contador = 0;
    let CantTS = 'ggg';
    
    if(!(Array.isArray(CantTS))) return 0
    else
    { 
        contador=CantTS.filter(i => i === 'true').length;
        
    }
   
    return contador;
  }
  console.log("Resultado = " + ContarTrues());
