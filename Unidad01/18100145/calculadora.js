const body = document.getElementById("body")
console.log(body)

body.addEventListener("click",(event) => {

    console.log(event.target.tagName)
    

})