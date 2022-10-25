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
  const inverso = () => setResultado(resultado * -1);
  const AddPunto = () => setResultado(`${resultado}${punto}`);

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
    if (numero1 != null) {
      let auxResultado = Operadores[opPorcent](Number(numero1));
      setResultado(auxResultado);
    } else {
      let auxResultado = Operadores[opPorcent](Number(numero2));
      setResultado(auxResultado);
    }
  };

  const AgregarNumero = (numero) => {
    operador == null ? AuxNum1(numero) : AuxNum2(numero);
  };

  const AgregarOperador = (auxOperador) => {
    numero1 == null ? setNumero1(numero2) : setOperador(auxOperador);
  };

  const AgregarPunto = (punto) => {
    setResultado(`${resultado}${punto}`);
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
    } else if (esp == "%") {
      AuxResulPorcent(esp);
    } else if (esp) {
      let auxResultadoInv = Operadores[esp];
      setResultado(auxResultadoInv);
    }
  };

  return [resultado, AgregarNumero, AgregarOperador, Especiales, AgregarPunto];
};

export default ProcMat;
