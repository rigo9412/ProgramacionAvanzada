var contenedor = document.getElementById('contenedor');
var range = document.getElementById('range');
var color = document.getElementById('color');
contenedor.style.width =  "100vw";
contenedor.style.height = '100vh';
contenedor.style.zIndex = "10";
contenedor.style.backgroundColor = getRGBA();
contenedor.onclick = function () {
    contenedor.style.backgroundColor = getRGBA();
}

  
color.onchange = function (e){
    const color = e.target.value
    const r = parseInt(color.substr(1,2), 16)
    const g = parseInt(color.substr(3,2), 16)
    const b = parseInt(color.substr(5,2), 16)
    console.log(`red: ${r}, green: ${g}, blue: ${b}`)
    console.log(color);
}

range.oninput = function (e) {  
    console.log(e.target.value);
}

contenedor.onwheel = function (e) {
    var alpha = e.deltaY * -0.01
    alpha = Math.min(Math.max(.5,alpha),1)
    //console.log("scrolling...",contenedor.style.backgroundColor);
    var temp = contenedor.style.backgroundColor;
    temp = temp.replace("rgba(","").replace("rgb(","").replace(")","").split(",");
    if(temp.length  == 4 ) temp[3] = alpha + ""
    else temp.push(alpha + "");
   // console.log(temp)
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
