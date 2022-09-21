const express = require('express')
const bodyParser = require('body-parser')
const  numberParser = require('./Models/number_to_text')
const app = express()
const port = 3000



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.post('/textNumber', (req, res) => {
    var {number} = req.body
    if(number == null || Number.isNaN(number)){
      return res.status(500).send("NUMERO INVALIDO")
    }
    res.send(numberParser.numberToText(number));
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



