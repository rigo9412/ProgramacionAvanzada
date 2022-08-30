const prueba = null
const cuenta = (data) => {
    if(!(prueba instanceof Array) || !prueba)
return 0

return prueba.filter(x=> x=== true).length
}
console.log(cuenta({}))