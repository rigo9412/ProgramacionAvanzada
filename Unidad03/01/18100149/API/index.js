const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const numberParser = require("./Modules/NumeroaTexto");
const app = express();
const port = 3000;

// var corsOptions = {
//   origin: 'http://localhost:5000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

//app.use(cors(corsOptions))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hola", (req, res) => {
  res.send({
    response: "hola",
  });
});

app.post("/textNumber", (req, res) => {
  var { number } = req.body;
  console.log(number);
  if (number == null || Number.isNaN(number)) {
    return res.status(500).send({
      response: "NUMERO INVALIDO",
    });
  }
  res.send({
    response: numberParser.numberToText(number),
  });
});

app.post("/textDate", (req, res) => {
  var { date } = req.body;
  console.log(date);
  if (date == null) {
    return res.status(500).send({
      response: "FECHA INVALIDA",
    });
  }
  res.send({
    response: numberParser.fechaTexto(date),
  });
});

app.post("/calcTime", (req, res) => {
  var { time } = req.body;
  console.log(time);
  if (time == null) {
    return res.status(500).send({
      response: "NUMERO INVALIDO",
    });
  }
  res.send({
    response: numberParser.ConvertirFecha_Minutos(time),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
