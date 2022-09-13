var contenedor = document.getElementById('cont');
/*contenedor.style.width =  '100vw';
contenedor.style.height = '100vh';*/
//contenedor.style.zIndex = "10";
/*contenedor.style.backgroundColor = getRGBA();*/

/*const color = document.getElementById("cont");*/
const rangeRed = document.getElementById("red");
const rangeBlue = document.getElementById("blue");
const rangeGreen = document.getElementById("green");
const rangeAlpha = document.getElementById("alpha");

const sred =document.getElementById("Sred")
const sgreen =document.getElementById("Sgreen")
const sblue =document.getElementById("Sblue")
const salpha =document.getElementById("Salpha")

const TablaColor = document.getElementById("color")

var Hr
var Hg
var Hb

let rgba = [random(0,255),random(0,255),random(0,255),1*random(0,100)*0.01]
valores(random(0,255),random(0,255),random(0,255),1*random(0,100)*0.01)

contenedor.addEventListener('click', () => valores(random(0,255),random(0,255),random(0,255),1*random(0,100)*0.01))

function valores(r,g,b,a){
    rgba[0] = r;
    rgba[1] = g;
    rgba[2] = b;
    rgba[3] = a;
    rangeRed.value=rgba[0];
    rangeGreen.value=rgba[1];
    rangeBlue.value=rgba[2];
    rangeAlpha.value=rgba[3]*100;
    sred.innerHTML=rgba[0]
    sgreen.innerHTML=rgba[1]
    sblue.innerHTML=rgba[2]
    salpha.innerHTML=rgba[3]
    Hr=decToHex(r)
    Hg=decToHex(g)
    Hb=decToHex(b)
    Hexval='#'+Hr+Hg+Hb
    /*console.log(Hexval)*/
    TablaColor.value=Hexval
    cambiarColor()
}
function decToHex(h){
    var Hex = h.toString(16)
    if (Hex == 1) {
        Hex="0"+Hex;
    }
    return Hex
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
    var a = 1*random(0,100)*0.01
    valores(r,g,b,a)
}
/*contenedor.onclick = function () {
    contenedor.style.backgroundColor = getRGBA();
}*/

//mostrar el nombre del color y cantidad (0-255)
/*contenedor.onwheel = function (e) {
    console.log(e)
    var alpha = e.deltaY * -0.01
    alpha = Math.min(Math.max(.5,alpha),1)

    console.log("scrolling...",contenedor.style.backgroundColor);
    var temp = contenedor.style.backgroundColor;
    temp = temp.replace("rgba(","").replace("rgb(","").replace(")","").split(",");
    if(temp.length  == 4 ) temp[3] = alpha + ""
    else temp.push(alpha + "");
    console.log(temp)
    contenedor.style.backgroundColor = `rgba(${temp.join(",")})`    
}*/
/*function getRandomArbitrary(min, max) {
    return  Math.random() * (max - min) + min;
}*/  
/*function getRGBA(){
    var blue = getRandomArbitrary(0,255);
    var red = getRandomArbitrary(0,255);
    var green = getRandomArbitrary(0,255);

    contenedor.innerHTML = `Red = ${red} Blue = ${blue} Green = ${green}`
    return `rgba(${red},${green},${blue},1)`
}*/

//let rgba = [(randon (0, 255)), (randon (0, 255)), (randon (0, 255)), (randon (0, 100)*0.01)];
/*rangeAlpha.value = rgba[3];
rangeBlue.value = rgba[2];
rangeGreen.value = rgba[1];
rangeRed.value = rgba[0];*/

rangeGreen.oninput = (e)=>update(1,e.target.value,sgreen)
rangeRed.oninput = (e)=>update(0,e.target.value,sred)
rangeBlue.oninput = (e)=>update(2,e.target.value,sblue)
rangeAlpha.oninput = (e)=>update(3,(e.target.value*0.01),salpha)

rangeGreen.onchange = (e)=>update(1,e.target.value,sgreen)
rangeRed.onchange = (e)=>update(0,e.target.value,sred)
rangeBlue.onchange = (e)=>update(2,e.target.value,sblue)
rangeAlpha.onchange = (e)=>update(3,(e.target.value*0.01),salpha)

function cambiarColor(){
    contenedor.style.background = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
}
function random(min,max){
    return parseInt(Math.random()*(max - min) + min);
}