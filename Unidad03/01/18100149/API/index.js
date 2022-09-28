const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const numberParser = require("./Modules/NumeroaTexto");
const app = express();
//const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hola", (req, res) => {
  res.send({
    response: "Hola!! bienvenido soy Alfonso",
  });
});

app.post("/textNumber", (req, res) => {
  var { number } = req.body;
  console.log(number);
  if (number == null || Number.isNaN(number)) {
    return res.status(500).send({
      response: "Número invalido",
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
      response: "Fecha invalida",
    });
  }
  res.send({
    response: numberParser.fechaTexto(date),
  });
});

app.post("/Fechas", (req, res) => {
  var { date2 } = req.body;
  if (date2 == null) {
    return res.status(500).send({
      response: "Fecha invalida",
    });
  }
  res.send({
    response: numberParser.tTranscurrido(date2),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
