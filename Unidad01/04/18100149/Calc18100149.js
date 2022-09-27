//Declaración de variable y constantes
const form = document.getElementById("body");
const Input1 = document.getElementById("num1");
const Input2 = document.getElementById("num2");
const botonNumeros = document.getElementsByName("data-number");
const botonEsp = document.getElementsByName("data-tOp");
let operaciónConcatenada = "";
let opDivX = "1/x";

//Lista historial
var listaHistorial = new Array();

//Arreglos
const ArregloOp = ["+", "-", "*", "x", "/", "%", ".", "**", "√", "±", "1/x"];
const ArregloTE = ["Enter", "="];
const ArregloBorrar = ["C", "CE", "B"];

//Funciones
const sumar = (numero1, numero2) => numero1 + numero2;
const multiplicacion = (numero1, numero2) => numero1 * numero2;
const exponente = (numero1, numero2) => numero1 ** numero2;
const resta = (numero1, numero2) => numero1 - numero2;
const div = (numero1, numero2) => numero1 / numero2;
const raiz = (numero1) => Math.sqrt(numero1);
const porcentaje = (numero1, numero2) => (numero1 / 100) * numero2;

//Evento y función que obtiene el valor de la tecla y la envía al metódo Calcular()
form.addEventListener("keypress", (evento) => {
  Calcular(evento.key);
});

//Evento y función que obtiene el valor al hacer click y la envía al metódo Calcular()
botonNumeros.forEach(function (boton) {
  boton.addEventListener("click", () => {
    Calcular(boton.value);
  });
});

botonEsp.forEach(function (boton1) {
  boton1.addEventListener("click", () => {
    Calcular(boton1.value);
  });
});

//

//Función para borrar o limpiar display
function Limpiar_Borrar(borrar) {
  switch (borrar) {
    case "C":
      Input2.value = "";
      break;
    case "CE":
      Input1.value = "";
      Input2.value = "";
      break;
    case "B":
      Input2.value = Input2.value.substring(0, Input2.value.length - 1);
      break;
  }
}

//Método concatenar
function Concatenar(num) {
  if (!isNaN(num) || num === ".") {
    Input2.value += num;
  } else if (num == "±") {
    MasMenos();
  } else if (num == "1/x") {
    //Aquí se calcula el resultado
    Input1.value = "1 / " + Input2.value + " = ";
    Input2.value = 1 / Input2.value;
    Insertar();
    Mostrar();
  } else {
    //Concatena operadores
    Input1.value = Input2.value + " " + num;
    //operaciónConcatenada += Input1.value;
    Input2.value = "";
  }
}

//Insertar operaciones a la lista
function Insertar() {
  operaciónConcatenada += Input1.value + Input2.value;
  listaHistorial.push(operaciónConcatenada);
  operaciónConcatenada = "";
  // console.log(listaHistorial);
}

//Mostrar arreglo/lista del historial
function Mostrar() {
  const Historial = document.getElementById("Historial");
  const ul = document.createElement("ul");
  let dato = 0;
  let elemento = "";

  Historial.innerHTML = " ";

  for (dato of listaHistorial) {
    elemento = document.createElement("li");
    elemento.innerText = dato;
    ul.appendChild(elemento);
    Historial.appendChild(ul);
  }

  //Evento que se acciona al hacer click en un elemento de la lista
  ul.addEventListener("click", MostrarHistorial_Display);
  // console.log(dato);
}

function MostrarHistorial_Display(e) {
  let auxiliar = e.target.innerText;
  SepararOperacion(auxiliar);
}

//Método donde separo la cadena para insertarla en el input
function SepararOperacion(operacion) {
  const Op = operacion.split("=");
  //console.log(Op);
  Input1.value = Op[0] + "=";
  Input2.value = Op[Op.length - 1];
}

//Función para el operador ±
function MasMenos() {
  Input2.value = Input2.value * -1;
}

//Función Calcular donde se realizan todos los procesos matemáticos
function Calcular(Temp) {
  var Res = 0;

  if (!isNaN(Temp) || Temp === ".") {
    Concatenar(Temp);
  } else if (ArregloOp.includes(Temp)) {
    Concatenar(Temp);
  } else if (ArregloBorrar.includes(Temp)) {
    Limpiar_Borrar(Temp);
  } else if (ArregloTE.includes(Temp)) {
    Input1.value = Input1.value + " " + Input2.value + " = ";
    Input2.value = "";
    const Aux = (Input1.value + Input2.value).split(" ");

    //console.log(Aux);

    if (Aux[1] == "√") {
      Res = raiz(Number(Aux[0]));
      //Solo es para verlo mejor visualente
      Input1.value = Aux[1] + " " + Aux[0] + " " + " = ";
      Input2.value = Res.toFixed(2);
    } else {
      switch (Aux[1]) {
        case "+":
          Res = sumar(Number(Aux[0]), Number(Aux[2]));
          Input2.value = Res;
          break;
        case "-":
          Res = resta(Number(Aux[0]), Number(Aux[2]));
          Input2.value = Res;
          break;
        case "*":
          Res = multiplicacion(Number(Aux[0]), Number(Aux[2]));
          Input2.value = Res;
          break;
        case "**":
          Res = exponente(Number(Aux[0]), Number(Aux[2]));
          Input2.value = Res;
          break;
        case "/":
          if (Aux[2] == 0) {
            Input2.value = "Error (1/0)";
          } else {
            Res = div(Number(Aux[0]), Number(Aux[2]));
            Input2.value = Res.toFixed(2);
          }
          break;
        case "%":
          Res = porcentaje(Number(Aux[0]), Number(Aux[2]));
          Input2.value = Res.toFixed(3);
          break;
      }
    }
    Insertar();
    Mostrar();
  }
}
