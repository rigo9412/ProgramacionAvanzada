const form = document.getElementById("bodyy");
const Input1=document.getElementById("num1");
const Input2=document.getElementById("num2");
const ArregloOp=['+','-','*','x','/','%','.'];
const ArregloTE=['Enter','='];
const sumar =(numero1,numero2) => numero1 + numero2
const multiplicacion =(numero1,numero2) => numero1 * numero2
const exponente =(numero1,numero2) => numero1 ** numero2
const resta =(numero1,numero2) => numero1 - numero2


form.addEventListener('keypress', (evento) => {
    Calcular(evento.key);
})

form.addEventListener('click',(evento) => {
    
    const n1 = document.getElementById("0").value;
    const n2 = document.getElementById("1").value;
    const n3 = document.getElementById("2").value;
    const n4 = document.getElementById("3").value;
    const n5 = document.getElementById("4").value;
    const n6 = document.getElementById("5").value;
    const n7 = document.getElementById("6").value;
    const n8 = document.getElementById("7").value;
    const n9 = document.getElementById("8").value;
    const n10 = document.getElementById("9").value;
    const n11 = document.getElementById("%").value;
    const n12 = document.getElementById("√").value;
    const n13 = document.getElementById("x²").value;
   
    /*evento = document.getElementById("0").click().value;
    evento = document.getElementById("1").value.click();
    evento = document.getElementById("2").value.click();
    evento = document.getElementById("3").value.click();
    evento = document.getElementById("4").value.click();
    evento = document.getElementById("5").value.click();
    evento = document.getElementById("6").value.click();
    evento = document.getElementById("7").value.click();
    evento = document.getElementById("8").value.click();
    evento = document.getElementById("9").value.click();
    evento = document.getElementById("%").value.click();
    evento = document.getElementById("√").value.click();
    evento = document.getElementById("x²").value.click();*/

    
})

function Calcular(key){
    
    if(!isNaN(key)){
    
        Input2.value+=key;
    
    }
    else if(ArregloOp.includes(key)){
        Input1.value=Input2.value+" "+ key;
        Input2.value="";
    }
    else if(ArregloTE.includes(key)){
    
        const Aux = (Input1.value+" "+Input2.value).split(" ");
        console.log(Aux);
        switch(Aux[1]){
            case '+':
                sumar(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=sumar(Number(Aux[0]),Number(Aux[2]));
            break;
            case '-':
                resta(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=resta(Number(Aux[0]),Number(Aux[2]));
            break;
            case '*':
                multiplicacion(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=multiplicacion(Number(Aux[0]),Number(Aux[2]));
            break;
            case '**':
                exponente(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=exponente(Number(Aux[0]),Number(Aux[2]));
            break;
        }
            
    }

}





