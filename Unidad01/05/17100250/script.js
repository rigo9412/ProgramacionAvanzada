const color = document.getElementById("contenedor");
const rangegreen = document.getElementById("green");
const rangeblue = document.getElementById("blue");
const rangered = document.getElementById("red");
const rangealpha = document.getElementById("alpha");
//const colortext = document.getElementById("colorInputText").value;

let rgba = [
  random(0, 255),
  random(0, 255),
  random(0, 255),
  random(0, 100) * 0.01,
];
const spRed = document.getElementById("spRed");
const spGreen = document.getElementById("spGreen");
const spBlue = document.getElementById("spBlue");
const spAlpha = document.getElementById("spAlpha");
const Palette = document.getElementById("Paleta");

values(random(0, 255), random(0, 255), random(0, 255), random(0, 100));

function values(r, g, b, a) {
  rgba[0] = r;
  rgba[1] = g;
  rgba[2] = b;
  rgba[3] = a;
  rangered.value = rgba[0];
  rangegreen.value = rgba[1];
  rangeblue.value = rgba[2];
  rangealpha.value = rgba[3] * 100;
  changeColor();
}

const update = (index, color, span) => {
  span.innerHTML = color;
  rgba[index] = color;
  changeColor();
};

/*color.addEventListener("click", (e) => {
  values(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  // console.log(e.target.style.backgroundColor);
  var flag = 1;
  updatePalette(e, flag);
});*/

Palette.oninput = (e) => {
  var aux = e.target.value;
  var r = parseInt(aux.substring(1, 3), 16);
  var g = parseInt(aux.substring(3, 5), 16);
  var b = parseInt(aux.substring(5, 7), 16);
  var a = 1;
  values(r, g, b, a);
  //console.log(r, g, b);
};

function updatePalette(e, flag) {
  aux = e.target.style.backgroundColor;
  var regex = /(\d+)/g;
  var aux2 = aux.match(regex);
  var r = parseInt(aux2[0], 16);
  var g = parseInt(aux2[1], 16);
  var b = parseInt(aux2[2], 16);
  var a = 1;
  var l = "#" + r + g + b + a;

  //console.log(r);
}

rangered.oninput = (e) => update(0, e.target.value, spRed);
rangegreen.oninput = (e) => update(1, e.target.value, spGreen);
rangeblue.oninput = (e) => update(2, e.target.value, spBlue);
rangealpha.oninput = (e) => update(3, e.target.value * 0.01, spAlpha);

rangered.onchange = (e) => update(0, e.target.value, spRed);
rangegreen.onchange = (e) => update(1, e.target.value, spGreen);
rangeblue.onchange = (e) => update(2, e.target.value, spBlue);
rangealpha.onchange = (e) => update(3, e.target.value * 0.01, spAlpha);

function changeColor() {

  color.style.backgroundColor = `rgba( ${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]} )`;

  let AColor = `rgba( ${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]} )`;
 
 console.log(AColor);
document.getElementById("colorInputText").value=AColor;

}

function inputcolor(){
  const colortext = document.getElementById("colorInputText").value;

  //console.log(colortext)
  if (colortext != " ") {
  color.style.backgroundColor = colortext;
 } 
 else{
  color.style.backgroundColor = `rgba( ${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]} )`;

 }

 let AColor = `rgba( ${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]} )`;
 console.log(colortext);
 //console.log(AColor);
// document.getElementById("colorInputText").value=AColor;

}

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}



//color.style.backgroundColor = "red";
// color.addEventListener("click", function (e) {
//   e.target.style.backgroundColor = randomColor();
// });

//color.onwheel = function (e) {};

// function randomColor() {
//   let simbolos, color;
//   simbolos = "0123456789ABCDEF";
//   color = "#";

//   for (let i = 0; i < 6; i++) {
//     color = color + simbolos[Math.floor(Math.random() * 16)];
//   }

//console.log(color);
//   return color;
// }