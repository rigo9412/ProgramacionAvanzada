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
     }
     setOperator(simbol);
  }

  const calculateResult = () => {
    console.log(number1,operator, number2);
    if(number1 != null && number2 != null && operator != null){
     
      var tempResult = relationOperation[operator](number1, number2)
      setNumber1(tempResult);
      setResult(tempResult);
    }else{
      console.log("no hace nada")
    }

  }
 


  return [
    result,addNumber,addOperator,calculateResult
  ]

}

export default useMath;