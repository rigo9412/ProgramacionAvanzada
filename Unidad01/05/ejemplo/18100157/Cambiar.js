let contenedor = document.getElementById("contenedor")
/*contenedor.style.width=window.innerWidth+'px';
contenedor.style.height=window.innerHeight+'px';*/
const ranred =document.getElementById("red")
const rangreen =document.getElementById("green")
const ranblue =document.getElementById("blue")
const ranalpha =document.getElementById("alpha")
const sred =document.getElementById("Sred")
const sgreen =document.getElementById("Sgreen")
const sblue =document.getElementById("Sblue")
const salpha =document.getElementById("Salpha")
const TablaColor = document.getElementById("color")

let rgba = [random(0,255),random(0,255),random(0,255),1/*random(0,100)*0.01*/]
valores(random(0,255),random(0,255),random(0,255),1/*random(0,100)*0.01*/)

//contenedor.addEventListener('click', () => valores(random(0,255),random(0,255),random(0,255),1/*random(0,100)*0.01*/))

function valores(r,g,b,a){
    rgba[0] = r;
    rgba[1] = g;
    rgba[2] = b;
    rgba[3] = a;
    ranred.value=rgba[0];
    rangreen.value=rgba[1];
    ranblue.value=rgba[2];
    ranalpha.value=rgba[3]*100;
    sred.innerHTML=rgba[0]
    sgreen.innerHTML=rgba[1]
    sblue.innerHTML=rgba[2]
    salpha.innerHTML=rgba[3]
    decToHex(r,g,b)
    cambiaarColor()
}

function decToHex(r,g,b){
    var HexaR = r.toString(16)
    var HexaG = g.toString(16)
    var HexaB = b.toString(16)
    console.log("r="+HexaR+" g="+HexaG+" b="+HexaB)
    if (HexaR.length == 1) {
        HexaR="0"+HexaR;
    }
    if (HexaG.length == 1) {
        HexaG="0"+HexaG;
    }
    if (HexaB.length == 1) {
        HexaB="0"+HexaB;
    }

    var hexa = "#"+HexaR+HexaG+HexaB
    console.log(hexa)
    return TablaColor.value=hexa
}

const update = (index,color,span)=>{
    span.innerHTML = color
    rgba[index]=color
    cambiaarColor()
}

TablaColor.oninput = (e)=>{
    var aux = TablaColor.value
    var r = parseInt(aux.substring(1,3),16)
    var g = parseInt(aux.substring(3,5),16)
    var b = parseInt(aux.substring(5,7),16)
    var a = 1
    valores(r,g,b,a)
}

rangreen.oninput = (e)=>update(1,e.target.value,sgreen)
ranred.oninput = (e)=>update(0,e.target.value,sred)
ranblue.oninput = (e)=>update(2,e.target.value,sblue)
ranalpha.oninput = (e)=>update(3,(e.target.value*0.01),salpha)

rangreen.onchange = (e)=>update(1,e.target.value,sgreen)
ranred.onchange = (e)=>update(0,e.target.value,sred)
ranblue.onchange = (e)=>update(2,e.target.value,sblue)
ranalpha.onchange = (e)=>update(3,(e.target.value*0.01),salpha)

function cambiaarColor(){
    contenedor.style.backgroundColor = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`
}

function random(min,max){
    return parseInt(Math.random()*(max - min) + min);
}

//contenedor.style.backgroundColor = 'red'
/*contenedor.style.width=window.innerWidth+'px';
contenedor.style.height=window.innerHeight+'px';

contenedor.onclick = function(){
    contenedor.style.backgroundColor = getRGBA();
}

/*contenedor.onscroll = function(e) {
    console.log("scrolling...",e.target.timeline.currentTime % 2);
    var temp = contenedor.style.backgroundColor;
    temp = temp.replace('rgba(","').remp
}*/

/*function getRandom(min,max){
    return parseInt(Math.random()*(max - min) + min);
}

function getRGBA(){
    var blue =getRandom(0,255)
    var red =getRandom(0,255)
    var green =getRandom(0,255)
    contenedor.innerHTML = 'Red = '+red+' Blue = '+blue+' Green ='+ green
    return 'rgba('+red+','+green+','+green+','+1+')'
}*/

