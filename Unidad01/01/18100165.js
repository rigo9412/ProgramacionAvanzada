function invertir(c) {
    var cadena = "";
    for (var i = c.length - 1; i >= 0; i--) { 
        cadena += c[i];
    }
    return cadena;
}
invertir('12345');