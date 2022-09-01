const calc = document.getElementById("body");

const historial = document.getElementById("historial");
const valores = document.getElementById("valor");

const arregloOperaciones=['+','-','*','x','/','%','.'];
const arregloAccion=['Enter','='];

const Sumar = (num1,num2) => num1 + num2
const Resta = (num1,num2) => num1 - num2
const Multi = (num1,num2) => num1 * num2
const Expo = (num1,num2) => num1 ** num2
const Division  = (num1,num2) => num1 / num2

calc.addEventListener('keypress',(evento) => 
{
    Calcular(evento.key);
})

function Calcular(key){

    if(!isNaN(key)){

        valores.value+=key;

    }
    else if(arregloOperaciones.includes(key)){

        historial.value = valores.value+" "+ key;
        valores.value = "";

    }
    else if(arregloAccion.includes(key)){

        const aux = (historial.value + " " + valores.value).split(" ");
        switch(aux[1]){

            case '+' :
                Sumar(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + '=';
                valores.value = Sumar(Number(aux[0]),Number(aux[2]))
            break;

            case '-' :
                Resta(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + '=';
                valores.value = Resta(Number(aux[0]),Number(aux[2]))
            break;

            case '*' :
                Multi(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + '=';
                valores.value = Multi(Number(aux[0]),Number(aux[2]))
            break;

            case '**' :
                Expo(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + '=';
                valores.value = Expo(Number(aux[0]),Number(aux[2]))
            break;

            case '/' : 
            Division(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + '=';
                valores.value = Division(Number(aux[0]),Number(aux[2]))
            break;

        }

    }


   
}
    
