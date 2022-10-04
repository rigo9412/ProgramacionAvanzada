const h1 = document.getElementById("Ncontrol");
const h2 = document.getElementById("Nombre");
const colores = ["red", "yellow", "blue", "orange", "green"];
const fecha = document.getElementById("fecha");
const fechah1 = document.getElementById("fechah1");

//Funciones
const cambiarColor = (e) => {
  e.target.style.backgroundColor = colores[random(0, 5)];
};

const cambiarFecha = (e) => {
  fechah1.textContent = e.target.value;
};

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

h1.addEventListener("click", cambiarColor);
h2.addEventListener("click", cambiarColor);
fecha.addEventListener("input", cambiarFecha);
