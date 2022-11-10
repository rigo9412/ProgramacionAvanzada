import React,{useState} from "react";
const useMath = () => {
  const [result,setResult] = useState(0); 
  const [number1,setNumber1] = useState(null);
  const [number2,setNumber2] = useState(null);
  const [operator,setOperator] = useState(null);
  
  const sum = (number,number2) => Number(number)+Number(number2);
  const res = (number,number2) => Number(number)-Number(number2);
  const div = (number,number2) => Number(number)/Number(number2);
  const prod = (number,number2) => Number(number)*Number(number2);

  const relationOperation = {
    "+": sum,
    "-": res,
    "*": prod,
    "/": div,
  }

  const addNumber = (number) => {
    if(operator == null){
    
      var temp = `${number1 == null ? "" : number1}${number}`;
      setNumber1(temp)
      setResult(temp)
    }
    else{
      var temp = `${number2 == null ? "" : number2}${number}`;
      setNumber2(temp)
      setResult(temp)
    }
  }

  const addOperator = (simbol) => {
     if(number1 == null){
       setNumber1(0);
     }else if(simbol=='AC'){
        setNumber1(null)
        setNumber2(null)
        setOperator(null)
        setResult(0)
        console.log("entro:"+number1+","+number2+","+operator)
     }else if(simbol=='&'){
        if(number2==null){
            number1 = prod(number1,-1)
            setNumber1(number1)
            setResult(number1)
        }else{
            number2 = prod(number2,-1)
            setNumber2(number2)
            setResult(number2)
        }
     }else if(simbol=='%'){
        setResult(number2+"%")
        number2 = div(number2,100)
        if(operator=='*'){
            setNumber2(number2)
        }else if(operator=='+'||operator=='-'){
            number2 = prod(number2,number1)
            setNumber2(number2)
        }
     }else if (simbol == operator){
        calculateResult()
     }else{
        console.log("Numero 1:"+number1+"Operador es: "+simbol+"Numero 2:"+number2)
        setOperator(simbol);
        setNumber2(null)
     }
  }

  const calculateResult = () => {
    if(number1 != null && number2 != null && operator != null){
     console.log(number1 +" "+operator+" "+number2)
      var tempResult = relationOperation[operator](number1, number2)
      console.log(tempResult)
      setNumber1(tempResult);
      setResult(tempResult);
    }else{
      console.log("no hace nada")
    }

  }
 


  return [
    result,operator,addNumber,addOperator,calculateResult
  ]

}

export default useMath;