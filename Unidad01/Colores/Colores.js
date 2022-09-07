
const y = document.getElementById('body');

y.style.width = window.innerWidth + 'px';
y.style.height = window.innerHeight + 'px';

const colores = ['green', 'yellow', 'blue', 'black', 'pink' , 'orange' , 'purple' , 'red' , 'white'];

y.onclick = function() {
    
    const coloraleatorio = Math.floor(Math.random() * colores.length);
    y.style.backgroundColor = colores[coloraleatorio];
    // console.log(coloraleatorio);
}







