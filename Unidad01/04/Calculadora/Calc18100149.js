//Declaración de variables, constantes y arreglos 
const form = document.getElementById("body");
const Input1 = document.getElementById("num1");
const Input2 = document.getElementById("num2");
const botonNumeros = document.getElementsByName('data');
//¬const botonEsp=document.getElementsByName('data-Esp');
const ArregloOp = ['+','-','*','x','/','%','.','**','√'];
const ArregloTE = ['Enter','='];
const ArregloBorrar =['C','CE','B'];
//Funciones
const sumar =(numero1,numero2) => numero1 + numero2
const multiplicacion =(numero1,numero2) => numero1 * numero2
const exponente =(numero1,numero2) => numero1 ** numero2
const resta =(numero1,numero2) => numero1 - numero2
const div=(numero1,numero2) => numero1 / numero2
const raiz =(numero1) => Math.sqrt(numero1)

//Evento y función que obtiene el valor de la tecla y la envía al metódo Calcular()
form.addEventListener('keypress', (evento) => {
    Calcular(evento.key);
})

//Evento y función que obtiene el valor al hacer click y la envía al metódo Calcular()
botonNumeros.forEach(function(boton){
    boton.addEventListener('click',() => {
       Calcular(boton.value);
    })
})

//Función Calcular() donde se realizan todos los procesos
function Calcular(Temp){
    
    if(!isNaN(Temp) || Temp === "."){
        Input2.value+=Temp;
    }
    else if(ArregloOp.includes(Temp)){
        Input1.value+=Input2.value+" "+ Temp;
        Input2.value="";
    }
    else if(ArregloBorrar.includes(Temp)){
        switch(Temp){
            case'C':
                Input1.value="";
                Input2.value="";
            break;
            case'CE':
                Input1.value="";
                Input2.value="";
            break;
            case 'B':
                Input2.value=Input2.value.substring(0,Input2.value.length-1);
            break;
        }
    }
    else if(ArregloTE.includes(Temp)){
    
        const Aux = (Input1.value+" "+Input2.value).split(" ");
    
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
            case '/':
                div(Number(Aux[0]),Number(Aux[2]))
                Input1.value=Input1.value+" "+Input2.value + '=';
                Input2.value=div(Number(Aux[0]),Number(Aux[2]));
            break;
            case '√':
                raiz(Number(Aux[0]))
                Input1.value=Input1.value+" "+Input2.value + ' =';
                Input2.value=raiz(Number(Aux[0]))
            break;
        }
    }
}
