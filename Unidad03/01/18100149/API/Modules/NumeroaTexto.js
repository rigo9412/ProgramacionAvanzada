const unidades = {
  0: "",
  1: "uno",
  2: "dos",
  3: "tres",
  4: "cuatro",
  5: "cinco",
  6: "seis",
  7: "siete",
  8: "ocho",
  9: "nueve",
  10: "diez",
  11: "once",
  12: "doce",
  13: "trece",
  14: "catorce",
  15: "quince",
  16: "dieciseis",
  17: "diecisiete",
  18: "dieciocho",
  19: "diecinueve",
  20: "veinte",
};
const decenas = {
  2: "veinti",
  3: "treinta",
  4: "cuarenta",
  5: "cincuenta",
  6: "sesenta",
  7: "setenta",
  8: "ochenta",
  9: "noventa",
};
const centenas = {
  0: "",
  1: "ciento",
  2: "doscientos",
  3: "trescientos",
  4: "cuatrocientos",
  5: "quinientos",
  6: "seiscientos",
  7: "setecientos",
  8: "ochocientos",
  9: "novecientos",
};
const miles = {
  1: "mil",
  2: "dos mil",
  3: "tres mil",
  4: "cuatro mil",
  5: "cinco mil",
};
const especiales = {
  100: "cien",
  20: "veinte",
  //"10": "DIECI",
};

const meses = {
  0: "enero",
  1: "febrero",
  2: "marzo",
  3: "abril",
  4: "mayo",
  5: "junio",
  6: "julio",
  7: "agosto",
  8: "septiembre",
  9: "octubre",
  10: "noviembre",
  11: "diciembre",
};

const dias = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

const fecha = (fecha2) => {
  let res = fecha2.split("-");
  let res2 = res[2].split("T");

  res[2] = res2[0];
  res.push(res2[1].split(":"));
  return new Date(res[0], res[1], res[2], res[3][0], res[3][1]);
};

const fechaTexto = (fecha3) => {
  let f = fecha(fecha3);
  return `${dias[f.getDay()]} ${numberToText(f.getDate())} de ${
    meses[f.getMonth() - 1]
  } de ${numberToText(f.getFullYear())} a las ${numberToText(f.getHours())} ${
    f.getMinutes() > 0 ? numberToText(f.getMinutes()) : " en punto"
  }`;
};

const tTranscurrido = (tiempoActual) => {
  let date = tiempoActual.getMilliseconds();
  return `${date}`;
};

const getCentenas = (c, d) => {
  return c == 1 && d == 0 ? especiales[c * 100] : centenas[c];
};

const getDecenas = (d, u) => {
  return d == 2 && u == 0 ? especiales[d * 10] : decenas[d];
};

const getUnidades = (d, u) => {
  return d == 1 ? unidades[`${d}${u}`] : unidades[u];
};

const numberToText = (numero) => {
  if (numero <= 19) {
    return unidades[numero];
  } else if (numero == 20) {
    return especiales[numero];
  } else if (numero < 100) {
    var d = parseInt(numero / 10);
    var u = parseInt(numero % 10);
    var result = decenas[d];
    if (d == 1) result = `${result}${unidades[u]}`;
    else if (u > 0) result = `${result} y ${unidades[u]}`;
    return result;
  } else if (numero <= 1000) {
    var result = "";
    var c = parseInt(numero.toString()[0]);
    var d = parseInt(numero.toString()[1]);
    var u = parseInt(numero.toString()[2]);

    if (d == 0 && u == 0) {
      return getCentenas(c, d);
    } else if (d < 2 && u >= 1 && u <= 9) {
      return `${getCentenas(c, d)} ${getUnidades(d, u)}`;
    } else if (d == 2 && u >= 1 && u <= 9) {
      return `${getCentenas(c, d)} ${getDecenas(d, u)} y ${getUnidades(d, u)}`;
    } else if (d == 0 && u <= 9) {
      return `${getCentenas(c, d)} ${getDecenas(d, u)}`;
    } else if (u > 0) {
      return `${getCentenas(c, d)} ${getDecenas(d, u)} y ${getUnidades(d, u)}`;
    } else {
      return `${getCentenas(c, d)} ${getDecenas(d, u)}`;
    }
  } else if (numero <= 10000) {
    var m = parseInt(numero.toString()[0]);
    var c = parseInt(numero.toString()[1]);
    var d = parseInt(numero.toString()[2]);
    var u = parseInt(numero.toString()[3]);

    miles[m];

    if (d == 0 && u == 0) {
      return `${miles[m]} ${getCentenas(c, d)}`;
    } else if (d < 2 && u >= 1 && u <= 9) {
      return `${miles[m]} ${getCentenas(c, d)} ${getUnidades(d, u)}`;
    } else if (d == 2 && u >= 1 && u <= 9) {
      return `${miles[m]} ${getCentenas(c, d)} ${getDecenas(
        d,
        u
      )} y ${getUnidades(d, u)}`;
    } else if (d == 0 && u <= 9) {
      return `${miles[m]} ${getCentenas(c, d)} ${getDecenas(d, u)}`;
    } else if (u > 0) {
      return `${miles[m]} ${getCentenas(c, d)} ${getDecenas(
        d,
        u
      )} y ${getUnidades(d, u)}`;
    } else {
      return `${miles[m]} ${getCentenas(c, d)} ${getDecenas(d, u)}`;
    }
  } else {
    return "NA";
  }
};

module.exports = {
  numberToText,
  fechaTexto,
};
