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
    0: "Enero",
    1: "Febrero",
    2: "Marzo",
    3: "Abril",
    4: "Mayo",
    5: "Junio",
    6: "Julio",
    7: "Agosto",
    8: "Septiembre",
    9: "Octubre",
    10: "Noviembre",
    11: "Diciembre",
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
    //2022-09-22T11:12 formato
    let res = fecha2.split("-");
    let res2 = res[2].split("T");
  
    res[2] = res2[0];
    res.push(res2[1].split(":"));
    console.log(res.join(","));
    // return new Date(res[0], res[1], res[2], res[3], res[4]);
    return new Date(res[0], res[1], res[2], res[3][0], res[3][1]);
  };
  
  const fechaTexto = (fecha3) => {
    let f = fecha(fecha3);
    console.log(f);
    return `${dias[f.getDay()]},${numberToText(f.getDate())} de ${
      meses[f.getMonth()]
    } de ${numberToText(f.getFullYear())} a las ${numberToText(f.getHours())} ${
      f.getMinutes() > 0 ? numberToText(f.getMinutes()) : " en punto"
    }`;
  };
  
  const SepararFecha = (d) => {
    let res3 = d.split("-");
    let res4 = res3[2].split("T");
    res3[2] = res4[0];
    res3.push(res4[1].split(":"));
    return res3.join(",");
  };
  
  const CalcularTiempoTranscurrido = (fechaActual, fechaRec) => {
    var ArregloTiempo = [];
    let aux1 = fechaActual.split(",");
    let aux2 = fechaRec.split(",");
    ArregloTiempo[0] = (aux1[0] - aux2[0]) * 1440;
    ArregloTiempo[1] = (aux1[1] - aux2[1]) * 43800;
    ArregloTiempo[2] = (aux1[2] - aux2[2]) * 525600;
    ArregloTiempo[3] = (aux1[3] - aux2[3]) * 60;
    ArregloTiempo[4] = aux1[4] - aux2[4];
  
    let TiempoMinutos =
      ArregloTiempo[0] +
      ArregloTiempo[1] +
      ArregloTiempo[2] +
      ArregloTiempo[3] +
      ArregloTiempo[4];
  
    if (TiempoMinutos < 0) {
      let cadena = `Dentro de ${(TiempoMinutos / 60) * -1} horas`;
      return cadena;
    } else {
      let cadena1 = `Hace ${(TiempoMinutos / 60) * -1} horas`;
      console.log(cadena1);
      return cadena1;
    }
  };
  
  const ConvertirFecha_Minutos = (fecha5) => {
    let hoy = new Date();
    let fecha4 = `${hoy.getFullYear()}-${
      hoy.getMonth() + 1
    }-${hoy.getDate()}T${hoy.getHours()}:${hoy.getMinutes()}`;
  
    let fechaSeparada = SepararFecha(fecha4);
    console.log(fechaSeparada);
    let fechaSeparada1 = SepararFecha(fecha5);
    let resultado = CalcularTiempoTranscurrido(fechaSeparada, fechaSeparada1);
    return resultado;
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
    console.log(numero);
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
    ConvertirFecha_Minutos,
  };