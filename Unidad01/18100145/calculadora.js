const body = document.getElementById("body")


const input = document.getElementById("resultado");

body.addEventListener("keypress",(event) => {

    input.value = event.key;
    

})