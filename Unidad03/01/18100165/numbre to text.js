const fecha = (fecha2) => {
    let res= fecha2.split("-");
    let res2 = res[2].split("t");

    res [2] = res2[0];
    res.push(res2.split(":"));
    return Date(res[0], res[1], res[2], res[3], res[4]);
} 
const fechaTexto = (fecha3) => {
    let f = fecha(fecha3);
    return '$(dias{f getday()'
}