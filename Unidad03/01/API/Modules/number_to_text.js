const unidades = {
  0: "",
  1: "UNO",
  2: "DOS",
  3: "TRES",
  4: "CUATRO",
  5: "CINCO",
  6: "SEIS",
  7: "SIETE",
  8: "OCHO",
  9: "NUEVE",
  10: "DIEZ",
  11: "ONCE",
  12: "DOCE",
  13: "TRECE",
  14: "CATORCE",
  15: "QUINCE",
  16: "DIECISEIS",
  17: "DIECISIETE",
  18: "DIECIOCHO",
  19: "DIECINUEVE",
  20: "VEINTE",
};
const decenas = {
  0: "",
  2: "VEINTI",
  3: "TREINTA",
  4: "CUARENTA",
  5: "CICUENTA",
  6: "SESENTA",
  7: "SETENTA",
  8: "OCHOCHETA",
  9: "NOVENTA",
};
const centenas = {
  0: "",
  1: "CIENTO",
  2: "DOCIENTOS",
  3: "TRECIENTOS",
  4: "CUATROCIENTOS",
  5: "QUINIENTOS",
  6: "SEISCIENTOS",
  7: "SETECIENTOS",
  8: "OCHOCIENTOS",
  9: "NOVECIENTOS",
};
const miles = {
  1: "MIL",
  2: "DOS MIL",
  3: "TRES MIL",
  4: "CUATRO MIL",
  5: "CINCO MIL",
};
const especiales = {
  100: "CIEN",
  20: "VEINTE",
  //"10": "DIECI",
};

const meses = {
  0: "ENERO",
  1: "FEBRERO",
  2: "MARZO",
  3: "ABRIL",
  4: "MAYO",
  5: "JUNIO",
  6: "JULIO",
  7: "AGOSTO",
  8: "SEPTIEMBRE",
  9: "OBTUBRE",
  10: "NOVIEMBRE",
  11: "DICIEMBRE",
  
};

const dias = {
  0: "DOMINGO",
  1: "LUNES",
  2: "MARTES",
  3: "MIERCOLES",
  4: "JUEVES",
  5: "VIERNES",
  6: "SABADO",
  
  
  
};


const getCentenas = (c,d) => {
    return c == 1 && d == 0 ? especiales[c*100] : centenas[c]
}


const getDecenas = (d,u) => {
    return d == 2 && u == 0 ? especiales[d*10] : decenas[d]
}


const getUnidades = (d,u) => {
    return d == 1 ? unidades[`${d}${u}`] : unidades[u]
}


const getNumberCentenas=(numero)=>{
  var c = parseInt(numero.toString()[0]);
  var d = parseInt(numero.toString()[1]);
  var u = parseInt(numero.toString()[2]);

  if (d == 0 && u == 0) {
    return getCentenas(c,d);
  } else if (d < 2 && u>=1 && u <= 9) {
      return `${getCentenas(c,d)} ${getUnidades(d,u)}`;
  } else if (d == 2 && u>=1 && u <= 9) {
    return `${getCentenas(c,d)} ${getDecenas(d,u)} y ${getUnidades(d,u)}`;
  } else if (d == 0 && u <= 9) {
    return `${getCentenas(c,d)} ${getDecenas(d,u)}`;
  } else if (u > 0){
    return `${getCentenas(c,d)} ${getDecenas(d,u)} y ${getUnidades(d,u)}`;
  }
  else {
      return `${getCentenas(c,d)} ${getDecenas(d,u)}`;
  }
}


const toDate = (dateString)=>{
  var date = dateString.split('-');
  
  var hours = date[2].substring(3).split(":")
  date[2] = date[2].substring(0,2);
  return new Date(date[0], date[1]-1, date[2],hours[0],hours[1])
}

const numberToText = (numero) => {
  if (numero <= 19) {
    return unidades[numero];
  } else if (numero == 20) {
    return especiales[numero];
  } else if (numero < 100) {
    
    var d = parseInt(numero / 10);
    var u = parseInt(numero % 10);
    var result = decenas[d];
    if (d == 1 || d == 2) result = `${result}${unidades[u]}`;
    else if (u > 0) result = `${result} y ${unidades[u]}`;
    return result;

  } else if (numero <= 1000) {
    return getNumberCentenas(numero)
  } 
  else if (numero <= 5000){
    var result = miles[numero.toString()[0]];
    
    console.log(numero.toString().substring(1));
    return `${result} ${getNumberCentenas(numero.toString().substring(1))}`
  }
  
  else {
    return "NA";
  }
};

const dateToText = (date) => {
  var date = toDate(date);
  return `${dias[date.getDay()]}, ${numberToText(date.getDate())} de ${meses[date.getMonth()]} de ${numberToText(date.getFullYear())} a las ${numberToText(date.getHours())} HORAS ${ date.getMinutes() > 0 ? ("CON " +numberToText(date.getMinutes()) + " MINUTOS") : "EN PUNTO"}`;
}

module.exports = {
  numberToText,
  dateToText,
  
};
