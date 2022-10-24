import React, { useState } from "react";

const ProcMat = () => {
  const [resultado, setResultado] = useState(0);
  const [numero1, setNumero1] = useState(null);
  const [numero2, setNumero2] = useState(null);
  const [operador, setOperador] = useState(null);

  const sumar = (numero1, numero2) => numero1 + numero2;
  const restar = (numero1, numero2) => numero1 - numero2;
  const multiplicar = (numero1, numero2) => numero1 * numero2;
  const dividir = (numero1, numero2) => numero1 / numero2;
  const porcentaje = (numero1) => numero1 / 100;
  const inverso = () => {
    if (numero2 == null) {
      setNumero1(resultado * -1);
      return numero1;
    } else {
      setNumero2(resultado * -1);
      return numero2;
    }
  };

  const Operadores = {
    "+": sumar,
    "-": restar,
    x: multiplicar,
    "/": dividir,
    "%": porcentaje,
    "+/-": inverso,
  };

  const AuxNum1 = (num) => {
    let varAux = `${numero1 == null ? "" : numero1}${num}`;
    setNumero1(varAux);
    setResultado(varAux);
  };

  const AuxNum2 = (num) => {
    let varAux2 = `${numero2 == null ? "" : numero2}${num}`;
    setNumero2(varAux2);
    setResultado(varAux2);
  };

  const AuxResul = (op, num1, num2) => {
    var auxResultado = Operadores[op](Number(num1), Number(num2));
    setNumero1(auxResultado);
    setNumero2(null);
    setResultado(auxResultado);
  };

  const AuxResulPorcent = (opPorcent) => {
    var auxResultado = Operadores[opPorcent](Number(numero1));
  };

  const AgregarNumero = (numero) => {
    operador == null ? AuxNum1(numero) : AuxNum2(numero);
  };

  const AgregarOperador = (auxOperador) => {
    numero1 == null ? setNumero1(numero2) : setOperador(auxOperador);
  };

  const OperadorInverso = (operadorInv) => {
    var auxResultadoInv = Operadores[operadorInv];
    setResultado(auxResultadoInv);
  };

  const Especiales = (esp) => {
    if (esp == "=") {
      numero1 != null && numero2 != null && operador != null
        ? AuxResul(operador, numero1, numero2)
        : "";
    } else if (esp == "AC") {
      setNumero1(null);
      setNumero2(null);
      setOperador(null);
      setResultado(0);
    }
  };

  return [
    resultado,
    AgregarNumero,
    AgregarOperador,
    Especiales,
    OperadorInverso,
  ];
};

export default ProcMat;
