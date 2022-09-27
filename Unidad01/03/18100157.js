let arreglo =[true,false,"0","1","false","true"]
var cont = 0

if (/*arreglo.length === 0*/ Array.isArray(arreglo) == false || arreglo === undefined || arreglo === null) {
    console.log("Error en el arreglo")
}else if (arreglo.length === 0){
  console.log("Arreglo vacio")
}else{
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == true) {
        cont++
   	}
	}	
}
console.log("Resultado: "+cont)