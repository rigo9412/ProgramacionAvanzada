var a= "Armando";
function reverseString(str){

    let arrStr = str.split("");

    return arrStr.reverse().join("");
}
console.log(reverseString(a))