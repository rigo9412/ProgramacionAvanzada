let contenedor = document.getElementById("contenedor")
contenedor.style.width=window.innerWidth+'px';
contenedor.style.height=window.innerHeight+'px';
const ranred =document.getElementById("red")
const rangreen =document.getElementById("green")
const ranblue =document.getElementById("blue")
const ranalpha =document.getElementById("alpha")
const sred =document.getElementById("Sred")
const sgreen =document.getElementById("Sgreen")
const sblue =document.getElementById("Sblue")
const salpha =document.getElementById("Salpha")
const TablaColor = document.getElementById("color")
const inHexa = document.getElementById("inHexa")
var ExpRegColHexa=/([A-F/a-f/0-9])$/;
var Hr
var Hg
var Hb
var r
var g
var b
var a
let rgba = [random(0,255),random(0,255),random(0,255),1/*random(0,100)*0.01*/]
valores(random(0,255),random(0,255),random(0,255),1/*random(0,100)*0.01*/)

contenedor.addEventListener('click', () => valores(random(0,255),random(0,255),random(0,255),1/*random(0,100)*0.01*/))


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
    Hr=decToHex(r)
    Hg=decToHex(g)
    Hb=decToHex(b)
    Hexval='#'+Hr+Hg+Hb
    TablaColor.value=Hexval
    inHexa.value=Hexval
    cambiaarColor()
}

function decToHex(h){
    var Hex = h.toString(16)
    console.log(Hex)
    if (Hex.length == 1) {
        Hex="0"+Hex;
    }
    return Hex
}

const update = (index,color,span)=>{
    span.innerHTML = color
    Hexa = decToHex(parseInt(color))
    rgba[index]=color
    switch (index) {
        case 0:
            Hr = Hexa
            Hexval='#'+Hr+Hg+Hb
            TablaColor.value=Hexval
            inHexa.value=Hexval
            break;
        case 1:
            Hg = Hexa
            Hexval='#'+Hr+Hg+Hb
            TablaColor.value=Hexval
            inHexa.value=Hexval
            break;
        case 2:
            Hb = Hexa
            Hexval='#'+Hr+Hg+Hb
            TablaColor.value=Hexval
            inHexa.value=Hexval
        break;
        default:
            break;
    }
    cambiaarColor()
}

TablaColor.oninput = (e)=>{
    var aux = TablaColor.value
    r = parseInt(aux.substring(1,3),16)
    g = parseInt(aux.substring(3,5),16)
    b = parseInt(aux.substring(5,7),16)
    a = 1
    valores(r,g,b,a)
}

inHexa.addEventListener("keyup",(e) =>{
    cadeHexa = inHexa.value
    if (cadeHexa.match(ExpRegColHexa)!=null){
        console.log(cadeHexa)
        if (cadeHexa.length==6){
            r = parseInt(cadeHexa.substring(0,2),16)
            g = parseInt(cadeHexa.substring(2,4),16)
            b = parseInt(cadeHexa.substring(4,6),16)
            a = 1
            valores(r,g,b,a)
        }else if(cadeHexa.length>6){
            inHexa.value=""
            window.alert("El valor Hexadecimal solo acepta 6 digitos")
        }
    }else{
        inHexa.value=""
        window.alert("Formato Invalido")
    }
})

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

