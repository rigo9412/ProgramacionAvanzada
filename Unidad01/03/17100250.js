const data = null
const contar = (data) => {
    if(!(data instanceof Array) || !data)
return 0

return data.filter(x=> x=== true).length
}
console.log(contar({}))