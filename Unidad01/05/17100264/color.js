var contenedor = document.getElementById('contenedor');
contenedor.style.width =  "100vw";
contenedor.style.height = '100vh';
contenedor.style.zIndex = "10";
contenedor.style.backgroundColor = getRGBA();
var hexa = ""

contenedor.onclick = function () {
    contenedor.style.backgroundColor = getRGBA();
}

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

function changeColor(e){

    let red = document.getElementById('ranred').value
    let green = document.getElementById('rangreen').value
    let blue = document.getElementById('ranblue').value
    let color = 'rgba(' + red + ',' + green + ',' + blue + ',1)'
    document.getElementById('contenedor').style.backgroundColor = color
    document.getElementById('contenedor').innerHTML = ': '+ color

}

document.getElementById('ranred').addEventListener('input',changeColor)
document.getElementById('ranblue').addEventListener('input',changeColor)
document.getElementById('rangreen').addEventListener('input',changeColor)
document.getElementById('ranalpha').addEventListener('input',changeColor)
var coloreshex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

document.getElementById('hexa').addEventListener('keyup', (e)=>{
    if(coloreshex.includes(e.key.toUpperCase())){
    console.log(hexa)
    if(hexa.length <= 8){
        hexa = hexa + e.key
        if(!hexa.includes("#")){
            hexa = "#" + hexa

        }
        console.log(hexa)
        console.log("cambio color")
        document.getElementById('contenedor').style.backgroundColor = hexa
        
    }
}
else{
    if(e.key == "Backspace"){
        hexa=""
        document.getElementById('hexa').value =""
    }
    else{
    document.getElementById("hexa").value = hexa
}
}

})