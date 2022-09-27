const dateInput = document.getElementById('date');
const unidades = {
    "1": "UNO",
    "2": "DOS",
    "3": "TRES",
    "4": "CUATRO",
    "5": "CINCO",
    "6": "SEIS",
    "7": "SIETE",
    "8": "OCHO",
    "9": "NUEVE",

}

const centenas = {
    "10": "DIEZ",
    "20": "VEINTE",
    "30": "TREINTA",
    "40": "CUARENTA",
    "50": "CICUENTA",
    "60": "SESENTA",
    "70": "SETENTA",
    "80": "OCHOCHETA",
    "90": "NOVENTA",
}

const decenas = {
    "100": "CIEN",
    "200": "DOCIENTOS",
    "300": "TRECIENTOS",
    "400": "CUATROCIENTOS",
    "500": "QUINIENTOS",
    "600": "SEISCIENTOS",
    "700": "SETECIENTOS",
    "800": "OCHOCIENTOS",
    "900": "NOVECIENTOS",
}

const miles = {
    "1000": "MIL",
    "2000": "DOS MIL"
}
const especiales = {
    "11": "ONCE",
    "12": "DOCE",
    "13": "TRECE",
    "14": "CATORCE",
    "15": "QUINCE",
    "10": "DIECI",
    "20": "VEINTI",
}


dateInput.onchange = function(e) {
    console.log(e.target.value);
    console.log();

    convertirFechaTexto(toDate(e.target.value)  )

}

const toDate = (dateString)=>{
    var date = dateString.split('-');
    
    var hours = date[2].substring(3).split(":")
    date[2] = date[2].substring(0,2);
    return new Date(date[0], date[1]-1, date[2],hours[0],hours[1])
}

const convertirFechaTexto = function(fecha) {
var resultado = "";
//2022-09-14T00:47
var dia = fecha.getDay()
var mes = fecha.getMonth()
var anio = fecha.getYear();
unidades[dia]
console.log(dia, mes, anio);

}
 