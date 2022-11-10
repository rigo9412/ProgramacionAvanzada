const color = document.getElementById("contenedor");
const rangegreen = document.getElementById("green");
const rangeblue = document.getElementById("blue");
const rangered = document.getElementById("red");
const rangealpha = document.getElementById("alpha");
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
const Text = document.getElementById("text");
color.style.width = window.innerWidth + "px";
color.style.height = window.innerHeight + "px";

values(random(0, 255), random(0, 255), random(0, 255), random(0, 100));

color.addEventListener("click", (e) => {
  values(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
});

Text.addEventListener("keyup", () => {
  var txt = Text.value;
  changeColor2(txt);
});

Palette.oninput = (e) => {
  var aux = e.target.value;
  var r = parseInt(aux.substring(1, 3), 16);
  var g = parseInt(aux.substring(3, 5), 16);
  var b = parseInt(aux.substring(5, 7), 16);
  var a = 1;
  values(r, g, b, a);
};

rangered.oninput = (e) => update(0, e.target.value, spRed);
rangegreen.oninput = (e) => update(1, e.target.value, spGreen);
rangeblue.oninput = (e) => update(2, e.target.value, spBlue);
rangealpha.oninput = (e) => update(3, e.target.value * 0.01, spAlpha);

rangered.onchange = (e) => update(0, e.target.value, spRed);
rangegreen.onchange = (e) => update(1, e.target.value, spGreen);
rangeblue.onchange = (e) => update(2, e.target.value, spBlue);
rangealpha.onchange = (e) => update(3, e.target.value * 0.01, spAlpha);

function values(r, g, b, a) {
  rgba[0] = r;
  rgba[1] = g;
  rgba[2] = b;
  rgba[3] = a;
  rangered.value = rgba[0];
  rangegreen.value = rgba[1];
  rangeblue.value = rgba[2];
  rangealpha.value = rgba[3] * 100;
  var hexa = RGBAh(rgba[0], rgba[1], rgba[2]);
  Palette.value = hexa;
  changeColor();
  Text.value = hexa;
}

const update = (index, color, span) => {
  span.innerHTML = color;
  rgba[index] = color;
  changeColor();
};

function RGBAh(r, g, b) {
  var result = "#" + colorHex(r) + colorHex(g) + colorHex(b);
  return result;
}

function colorHex(colorH) {
  var hex = colorH.toString(16);
  var hex2 = hex.length == 1 ? 0 + hex : hex;
  return hex2;
}

function changeColor() {
  color.style.backgroundColor = `rgba( ${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]} )`;
}

function changeColor2(txt) {
  Palette.value = txt;
  color.style.backgroundColor = txt;
}

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
