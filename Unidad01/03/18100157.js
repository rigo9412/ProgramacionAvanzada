let arreglo = [true,false,"0","1","false","true"]
var cont = 0

for (var i = 0; i < arreglo.length; i++) {
  //console.log(arreglo[i])
    if (arreglo[i] == true) {
      cont++
    }
}

console.log(cont)