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
    if(numGuardado=="0"||numIni==1){
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
    else{
        pantalla.innerHTML=numguardado.String+numero;
        numGuardado=numero;
    }
}
function operar(operacion) {
    //cadena.innerHTML=numGuardado;
    //numGuardado="0";
    
    igualar() 
    numEspera=numGuardado;
    numGuardado="0"; 
    pantalla.innerHTML=0;
    tipoOperacion=operacion; 
    numIni=0;
}
function igualar() {
    if (tipoOperacion=="no") { 
        cadena.innerHTML=numGuardado;
        pantalla.innerHTML=0;
    }
    else {
        cadenaOperacion=numEspera+tipoOperacion+numGuardado;
        solucion=eval(cadenaOperacion);
        pantalla.innerHTML=solucion;
        if(cadena.innerHTML==0)
        {
            cadena="0";
        cadena.innerHTML=cadenaOperacion;
        }
        else{
            cadena.innerHTML=cadena.innerHTML+cadenaOperacion;
        }
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
    cadena.innerHTML=0;
    pantalla.innerHTML=0;
    numGuardado="0";
    coma=0;
    numEspera=0;
    tipoOperacion="no";
}
function teclado (elEvento) {
    evento = elEvento || window.event;
    k=evento.keyCode;
    if (k>47 && k<58) { p=k-48;
        p=String(p)
        numero(p); 
    }
        if (k>95 && k<106) { p=k-96; p=String(p); numero(p); } if (k==110 || k==190) {numero(".")}
        if (k==106) {operar('*')} 
        if (k==107) {operar('+')} 
        if (k==109) {operar('-')} 
        if (k==111) {operar('/')} 
        if (k==32 || k==13) {igualar()} 
        if (k==46) {borradoTotal()} 
        if (k==8) {retro()} 
        if (k==36) {borradoParcial()}
}
    
