function invertirCadena(cadena) {
    let auxcadena = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        auxcadena += cadena[i];
    }
    return auxcadena;
}

invertirCadena("Alfonso");

