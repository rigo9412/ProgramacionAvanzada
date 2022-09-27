const result = document.getElementById("result");


fetch('http://localhost:3000/hola')
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

fetch('http://localhost:3000/textNumber',{
    method: 'POST',
    body: JSON.stringify({number:'14'}) , 
    headers: {
        'Content-Type': 'application/json',
        //"Access-Control-Allow-Origin" : 'http://localhost:5000'
    },
})
.then(response => response.json())  // convertir a json
.then(json => console.log(json))    //imprimir los datos en la consola
.catch(err => console.log('Solicitud fallida', err)); // Capturar errores    

// fetch('http://localhost:3000/textNumber',
// {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', 
//     cache: 'no-cache', 
//     credentials: 'same-origin', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//     body: JSON.stringify({number:14})  
//   }
// )
//   .then(response => console.log(response))
  