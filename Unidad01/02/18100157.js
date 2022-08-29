//Cesar Castro Salazar
var t1 = 5

for (let i = t1; i > -1; i--){
   console.log(i)
}

//Correccion
function atras(num){
    if(num===-1){return 1}
    else{
      console.log(num)
      return atras(num-1)
    }
  }
atras(5)