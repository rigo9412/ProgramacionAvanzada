const calc = document.getElementById("body");
const historial = document.getElementById("txt1");
const valores = document.getElementById("txt2");
const buton = document.getElementsByName('numero')


// const buton2 = document.getElementsById("his2");

const arregloOperaciones=['+','-','*','/','^','√','%','1/x'];
const arregloAccion=['Enter','='];
const borrar=['c','CE'];

const lista =[];

const Sumar = (num1,num2) => num1 + num2
const Resta = (num1,num2) => num1 - num2
const Multi = (num1,num2) => num1 * num2
const Expo = (num1,num2) => num1 ** num2
const Division  = (num1,num2) => num1 / num2
const Raiz = (num1) => Math.sqrt(num1);
const Porcentaje = (num1,num2) => (num1 / 100) * num2
const Dif = (num1) => 1 / num1;


calc.addEventListener('keypress',(evento) => 
{
    Calcular(evento.key);
})


buton.forEach(function(e){

    e.addEventListener('click', () => {
         
      Calcular(e.value);
      
    })
    
});

function mostrar(e){
    
    var P = e.target.innerText;
    historial.value = P;

}

function record(){

    var x;
    var y;
    const h = document.getElementById("display2");
    h.innerText = " ";
    for(x of lista){

        y = document.createElement("p");
        y.innerText = x; 

        h.appendChild(y);

    }

    y.addEventListener("click",mostrar());

}


function Calcular(key){

    if(!isNaN(key) || key === "."){

        valores.value+=key;

    }
    else if(arregloOperaciones.includes(key)){

        historial.value = valores.value + " " + key;
        valores.value="";

    } else if(borrar.includes(key)){

        historial.value="";
        valores.value="";
    
    
    } else if(key == "C"){

        valores.value = "";

    }else if(key == "←"){
        
        valores.value=valores.value.substring(0,valores.value.length-1);

    } else if(key == "+/-"){

        valores.value = valores.value * -1;


    }else if(arregloAccion.includes(key)){

        
        const aux = (historial.value + " " + valores.value).split(" ");

        switch(aux[1]){

            case '+' :
                Sumar(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + ' ';
                valores.value = Sumar(Number(aux[0]),Number(aux[2]))

            break;

            case '-' :
                Resta(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " "+ valores.value + ' ';
                valores.value = Resta(Number(aux[0]),Number(aux[2]))
            break;

            case '^' :
                Expo(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + ' ';
                valores.value = Expo(Number(aux[0]),Number(aux[2]))
            break;

            case '*' :
                Multi(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + ' ';
                valores.value = Multi(Number(aux[0]),Number(aux[2]))
            break;

            case '/' : 
            Division(Number(aux[0]),Number(aux[2]))
                historial.value = historial.value + " " + valores.value + ' ';
                valores.value = Division(Number(aux[0]),Number(aux[2]))
            break;   

            case '%' :
            Porcentaje(Number(aux[0]),Number(aux[2]))

                historial.value = historial.value + " " + valores.value + ' ';
                valores.value = Porcentaje(Number(aux[0]),Number(aux[2]))
            
            break;

            case '1/x' :
            Dif(Number(aux[0]))
                
                valores.value = Dif(Number(aux[0]))

            break;

             

        }

        if(aux[1] == '√'){
            
            var R = Raiz(Number(aux[0]))
            valores.value = R;

            historial.value = aux[1] + " " + aux[0] + "=";

        }

        
        lista.push(historial.value + " " + "= " +valores.value);
        console.log(lista);
        record();



        

    }





}
    
