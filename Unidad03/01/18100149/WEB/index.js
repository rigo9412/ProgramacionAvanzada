let hola = document.getElementById("Hola");
let numerotexto = document.getElementById("NumeroTexto");
let fecha = document.getElementById("Fecha");
let inputNumero = document.getElementById("InputNumero");
let Boton = document.getElementById("Boton");
let inputFecha = document.getElementById("FechaLocal");
let Boton2 = document.getElementById("Boton2");
let inputFecha2 = document.getElementById("FechaLocal2");
let fechat = document.getElementById("fechat");

const Bienvenido = async () => {
  try {
    var x = await fetch("http://localhost:3000/hola");
    x = await x.json();
    hola.textContent = x.response;
  } catch (e) {
    console.log(e);
  }
};

Bienvenido();

Boton.addEventListener("click", () => {
  fetch("http://localhost:3000/textNumber", {
    method: "POST",
    body: JSON.stringify({ number: inputNumero.value }),
    headers: { "content-Type": "application/JSON" },
  })
    .then((res) => res.json())
    .then((res) => (numerotexto.textContent = res.response))
    .catch((err) => console.log(err));
});

inputFecha.addEventListener("input", (e) => {
  fetch("http://localhost:3000/textDate", {
    method: "POST",
    body: JSON.stringify({ date: e.target.value }),
    headers: { "content-Type": "application/JSON" },
  })
    .then((res) => res.json())
    .then((res) => (fecha.textContent = res.response))
    .catch((err) => console.log(err));
});

Boton2.addEventListener("click", () => {
  var responseClone;
  fetch("http://localhost:3000/Fechas", {
    method: "POST",
    body: JSON.stringify({ date2: inputFecha2.value }),
    headers: { "content-Type": "application/JSON" },
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      fechat.textContent = res.response;
    });
});
