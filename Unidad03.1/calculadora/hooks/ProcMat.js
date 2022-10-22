import React, { useState } from "react";

const ProcMat = () => {
  const [resultado, setResultado] = useState(0);
  const [numero1, setNumero1] = useState(null);
  const [numero2, setNumero2] = useState(null);
  const [operador, setOperador] = useState(null);

  const sumar = (numero1, numero2) => numero1 + numero2;
  const resta = (numero1, numero2) => numero1 - numero2;
  const multiplicacion = (numero1, numero2) => numero1 * numero2;
  const div = (numero1, numero2) => numero1 / numero2;
  const porcentaje = (numero1, numero2) => (numero1 / 100) * numero2;
};
