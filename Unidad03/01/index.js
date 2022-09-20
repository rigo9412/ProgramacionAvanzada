const unidades = {
    "0": "",
    "1": "UNO",
    "2": "DOS",
    "3": "TRES",
    "4": "CUATRO",
    "5": "CINCO",
    "6": "SEIS",
    "7": "SIETE",
    "8": "OCHO",
    "9": "NUEVE",
    "10": "DIEZ",
    "11": "ONCE",
    "12": "DOCE",
    "13": "TRECE",
    "14": "CATORCE",
    "15": "QUINCE",
}
 
const decenas = {
    "1": "DIECI",
    "2": "VEINTI",
    "3": "TREINTA",
    "4": "CUARENTA",
    "5": "CICUENTA",
    "6": "SESENTA",
    "7": "SETENTA",
    "8": "OCHOCHETA",
    "9": "NOVENTA",
    "10": "CIEN",
}

const centenas = {
    "1": "CIENTO",
    "2": "DOCIENTOS",
    "3": "TRECIENTOS",
    "4": "CUATROCIENTOS",
    "5": "QUINIENTOS",
    "6": "SEISCIENTOS",
    "7": "SETECIENTOS",
    "8": "OCHOCIENTOS",
    "9": "NOVECIENTOS",
}

const miles = {
    "1000": "MIL",
    "2000": "DOS MIL"
}
const especiales = {
    "20": "VEINTE",
}


const numeroATexto = (numero) =>{
    if(numero <= 15){
        return unidades[numero]
    } else if (numero == 20){
        return especiales[numero]
    } else if (numero <= 100){
        var d = parseInt(numero/10);
        var u = parseInt(numero%10);
        var result = decenas[d]; 
        if(d == 1) result = `${result}${unidades[u]}`;
        else if(u > 0) result = `${result} y ${unidades[u]}`;

        return result;
    } else if (numero <= 1000){
        var c = parseInt(numero/100);
        var d = parseInt(numero%100);
        var u = parseInt(numero%10);
        console.log("c", c, "d",d,"u",u)
        var result = centenas[c]; 
        if(d > 0) result = `${result} ${decenas[u]}`;
        if(u > 0) result = `${result} y ${unidades[u]}`;
        return result;
    } else {
        return "NA"
    }
}


