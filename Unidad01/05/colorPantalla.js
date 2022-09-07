const color = document.getElementById("cont");
const rangeRed = document.getElementById("red");
const rangeBlue = document.getElementById("blue");
const rangeGreen = document.getElementById("green");
const rangeAlpha = document.getElementById("alpha");

//mostrar el nombre del color y cantidad (0-255)

let rgba = [(randon (0, 255)), (randon (0, 255)), (randon (0, 255)), (randon (0, 255))];
rangeAlpha.value = rgba[3];
rangeBlue.value = rgba[2];
rangeGreen.value = rgba[1];
rangeRed.value = rgba[0];


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
/*var contenedor = document.getElementById("cont");
contenedor.style.width= "100hx";
contenedor.style.height = "100hx";
contenedor.style.backgroundColor = getRGBA();

contenedor.onclick = function(){
    contenedor.style.background = getRGBA();
}

function getRandomArbitrary(min, max){
    return parseInt(Math.random() * (max - min) + min);
}
function getRGBA(){
    var red = getRandomArbitrary(0,255);
    var green =getRandomArbitrary(0,255);
    var blue =getRandomArbitrary(0,255);

    contenedor.innerHTML = 'Red = $(red) Blue = $(blue) Green = $(green)'
    return 'rgba($(red), $(green), $(blue))'
}*/