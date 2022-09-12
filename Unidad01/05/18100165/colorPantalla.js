var contenedor = document.getElementById('cont');
contenedor.style.width =  "100vw";
contenedor.style.height = '100vh';
//contenedor.style.zIndex = "10";
contenedor.style.backgroundColor = getRGBA();
contenedor.onclick = function () {
    contenedor.style.backgroundColor = getRGBA();
}

//mostrar el nombre del color y cantidad (0-255)
contenedor.onwheel = function (e) {
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
     
}
function getRandomArbitrary(min, max) {
    return  Math.random() * (max - min) + min;
}  
function getRGBA(){
    var blue = getRandomArbitrary(0,255);
    var red = getRandomArbitrary(0,255);
    var green = getRandomArbitrary(0,255);

    contenedor.innerHTML = `Red = ${red} Blue = ${blue} Green = ${green}`
    return `rgba(${red},${green},${blue},1)`
}
//sliders

const color = document.getElementById("cont");
const rangeRed = document.getElementById("red");
const rangeBlue = document.getElementById("blue");
const rangeGreen = document.getElementById("green");
const rangeAlpha = document.getElementById("alpha");

let rgba = [(randon (0, 255)), (randon (0, 255)), (randon (0, 255)), (randon (0, 100)*0.01)];
rangeAlpha.value = rgba[3];
rangeBlue.value = rgba[2];
rangeGreen.value = rgba[1];
rangeRed.value = rgba[0];

function valores(){
    rgba[0]=random(0,255);
    rgba[1]=random(0,255);
    rgba[2]=random(0,255);
    rgba[3]=(random(0,100)*0.01);
    rangeRed.value=gba[0];
    rangeRed.value=gba[1];
    rangeRed.value=gba[2];
    rangeRed.value=gba[3]*100;
    cambiaColor()
}

/*const update = (index.color){
    rgba[index] = color;
    cambiaColor();
}*/



rangeBlue.onchange = function(c){
    rgba[2] = c.target.value;
    cambiaColor();
}
rangeGreen.onchange = function(c){
    rgba[1] = c.target.value;
    cambiaColor();
}
rangeRed.onchange = function(c){
    rgba[0] = c.target.value;
    cambiaColor();
}
rangeAlpha.onchange = function(c){
    rgba[3] = c.target.value;
    cambiaColor();
}
function cambiaColor(){
    color.style.background = "rgba($rgba[0], $rgba[1], $rgba[2], $rgba[3])";
}