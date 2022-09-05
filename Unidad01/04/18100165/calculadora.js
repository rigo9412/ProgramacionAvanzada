window.onload = function(){
    cadena=document.getElementById("textoCadena");
    pantalla=document.getElementById("textoPantalla");
    document.onkeydown = teclado;
}
numGuardado="0"; 
coma=1;
tipoOperacion="no";
numEspera=0;
numIni=1;
function numero(numero) {
    if(numGuardado=="0"||numIni=="1"){
        pantalla.innerHTML=numero;
        numGuardado=numero;   
        if(numero=="."){
            pantalla.innerHTML="0.";
            numGuardado=numero;
            coma=1;
        }
        else{
        }
        numIni=0;
    }    
}
function operar(operacion) {
    igualar() 
    numEspera=numGuardado; 
    tipoOperacion=operacion; 
    numIni=0;
}
function igualar() {
    if (tipoOperacion=="no") { 
        pantalla.innerHTML=numeroGuardado; //mostramos el mismo número
    }
    else {
        cadenaOperacion=numEspera+tipoOperacion+numGuardado;
        solucion=eval(cadenaOperacion);
        pantalla.innerHTML=solucion;
        numGuardado=solucion;
        tipoOperacion="no";
        numIni=1;
    }
}
function raizc() {
    numGuardado=Math.sqrt(numGuardado); 
    pantalla.innerHTML=numGuardado;
    tipoOperacion="no";
    numIni=1;
}
function porcent() {
    numGuardado=numGuardado/100;
    pantalla.innerHTML=numGuardado;
    igualar()
    numIni=1;
}
    function opuest() {
    numConvertido=Number(numGuardado);
    numConvertido=-numConvertido;
    numGuardado=String(numConvertido);
    pantalla.innerHTML=numGuardado;
}
function inve() {
    numConvertido=Number(numGuardado);
    numConvertido=(1/numConvertido);
    numGuardado=String(numConvertido);
    pantalla.innerHTML=numGuardado;
    numIni=1;
}    
function retro(){
    cifras=numGuardado.length;
    br=numGuardado.substr(cifras-1,cifras)
    numGuardado=numGuardado.substr(0,cifras-1)
    if (x=="") {
        x="0";
    }
    if (br==".") {
        coma=0;
    }
    pantalla.innerHTML=numGuardado;
}
function borradoParcial() {
    pantalla.innerHTML=0;
    numGuardado=0;
    coma=0;
}
function borradoTotal() {
    pantalla.innerHTML=0;
    numGuardado="0";
    coma=0;
    numEspera=0;
    tipoOperacion="no";
}