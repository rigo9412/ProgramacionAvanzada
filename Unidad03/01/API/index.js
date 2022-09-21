const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/getNumberText', (req, res) => {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



