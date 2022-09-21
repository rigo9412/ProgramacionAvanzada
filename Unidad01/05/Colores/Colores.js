const body = document.getElementById("body");
const nombre = document.getElementById("nombre");

body.style.width=window.innerWidth+'px';
body.style.height=window.innerHeight+'px';

const ranred = document.getElementById("red");
const rangreen = document.getElementById("green");
const ranblue = document.getElementById("blue");
const ranalpha = document.getElementById("alpha");

const Sred =document.getElementById("Sred");
const Sgreen =document.getElementById("Sgreen");
const Sblue =document.getElementById("Sblue");
const Salpha =document.getElementById("Salpha");
const TablaColor = document.getElementById("color");

let rgba = [random(0,255),random(0,255),random(0,255),1]
valores(random(0,255),random(0,255),random(0,255),1)

body.addEventListener('click', () => valores(random(0,255),random(0,255),random(0,255),1))

function valores(r,g,b,a){

    rgba[0] = r;
    rgba[1] = g;
    rgba[2] = b;
    rgba[3] = a;
    ranred.value=rgba[0];
    rangreen.value=rgba[1];
    ranblue.value=rgba[2];
    ranalpha.value=rgba[3]*100;
    Sred.innerHTML=rgba[0]
    Sgreen.innerHTML=rgba[1]
    Sblue.innerHTML=rgba[2]
    Salpha.innerHTML=rgba[3]

    rgbahex(r,g,b);
    Slice(r,g,b);

    cambiarColor()

   
    
}

function rgbahex(r,g,b){

    var resul = "#" + colorhex(r) + colorhex(g) + colorhex(b);

    return TablaColor.value = resul;

}
function colorhex(colorr){
    var hex =  colorr.toString(16);
    return hex.length == 1 ? + hex : hex;
}



const update = (index,color,span)=>{
    span.innerHTML = color
    rgba[index]=color
    cambiarColor()
}

TablaColor.oninput = (e)=>{
    var aux = TablaColor.value
    var r = parseInt(aux.substring(1,3),16)
    var g = parseInt(aux.substring(3,5),16)
    var b = parseInt(aux.substring(5,7),16)
    var a = 1
    valores(r,g,b,a)
}

// rangreen.oninput = (e)=>update(1,e.target.value,Sgreen)
// ranred.oninput = (e)=>update(0,e.target.value,Sred)
// ranblue.oninput = (e)=>update(2,e.target.value,Sblue)
// ranalpha.oninput = (e)=>update(3,(e.target.value*0.01),Salpha)

// rangreen.onchange = (e)=>update(1,e.target.value,Sgreen)
// ranred.onchange = (e)=>update(0,e.target.value,Sred)
// ranblue.onchange = (e)=>update(2,e.target.value,Sblue)
// ranalpha.onchange = (e)=>update(3,(e.target.value*0.01),Salpha)

function Slice(r,g,b,a) {

    rangreen.oninput = (e)=>update(1,e.target.value,g)
    ranred.oninput = (e)=>update(0,e.target.value,r)
    ranblue.oninput = (e)=>update(2,e.target.value,b)
    ranalpha.oninput = (e)=>update(3,(e.target.value*0.01),a)

    rangreen.onchange = (e)=>update(1,e.target.value,g)
    ranred.onchange = (e)=>update(0,e.target.value,r)
    ranblue.onchange = (e)=>update(2,e.target.value,b)
    ranalpha.onchange = (e)=>update(3,(e.target.value*0.01),a)

}




function cambiarColor(){
    body.style.backgroundColor = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`
   
}

function random(min,max){
    return parseInt(Math.random()*(max - min) + min);
}