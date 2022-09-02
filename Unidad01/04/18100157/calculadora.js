const body = document.getElementById("body");
const Input1 = document.getElementById("num1");
const Input2 = document.getElementById("num2");
const Nums = document.getElementsByName("nume");
const Operadores=['+','-','X','/','%','^','√','1/x'];
const TE=['Enter','='];
const Borrar=['C','c'];
const sumar =(numero1,numero2) => numero1 + numero2
const multiplicacion =(numero1,numero2) => numero1 * numero2
const exponente =(numero1,numero2) => Math.pow(numero1,numero2)
const resta =(numero1,numero2) => numero1 - numero2
const dividir = (numero1,numero2) => numero1 / numero2
const raiz = (numero1) => Math.sqrt(numero1);
//const porcentaje = (numero1,numero2) => 

body.addEventListener('keypress',(evento) => {
    Calcular(evento.key);
})

Nums.forEach(function(boton){
    boton.addEventListener('click',(evento) =>{
        Calcular(boton.value)
    })
}
)

function Calcular(key){
    if (!isNaN(key) || key == '.') {
        Input2.value+=key;
    }
    else if(Operadores.includes(key)){
        if (key == '1/x') {
            console.log("Entra")
            Input1.value=1/+" "+ Input2.value;
            Input2.value="";
        }
        else{
            console.log("entra")
            Input1.value=Input2.value+" "+ key;
            Input2.value="";
        }
    }
    else if(Operadores.includes(key)){
        Input1.value=Input2.value+" "+ key;
        Input2.value="";
    }
    else if (Borrar.includes(key)) {
        Input1.value="";
        Input2.value="";
    }
    else if(TE.includes(key)){
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
            case 'X':
                multiplicacion(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=multiplicacion(Number(Aux[0]),Number(Aux[2]));
            break;
            case '/':
                dividir(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=dividir(Number(Aux[0]),Number(Aux[2]));
            break;
            case '^':
                exponente(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=exponente(Number(Aux[0]),Number(Aux[2]));
            break;
            case '√':
                console.log('hola')
                raiz(Number(Aux[0]))
                Input1.value=Input1.value + '=';
                Input2.value=raiz(Number(Aux[0]));
            break;
            /*case 'C':
                Input1.value="";
                Input2.value="";*/
        }
    }
}