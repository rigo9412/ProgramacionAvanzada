const form = document.getElementById("body");
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
