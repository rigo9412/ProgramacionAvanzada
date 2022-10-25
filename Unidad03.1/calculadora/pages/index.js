import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import ButtonAction from "../components/ButtonAction";
import InputNumber from "../components/InputNumber";
import ProcMat from "../hooks/ProcMat";

export default function Home() {
  const [resultado, AgregarNumero, AgregarOperador, Especiales, AgregarPunto] =
    ProcMat();

  return (
    <div className="flex-col bg-black items-center justify-center">
      <div className="flex items-center justify-center">
        <InputNumber valor={resultado}></InputNumber>
      </div>

      <div className="flex  items-center justify-center">
        <ButtonAction
          title="AC"
          btnDiferencia="Prin"
          click={Especiales}
        ></ButtonAction>
        <ButtonAction
          title="+/-"
          btnDiferencia="Prin"
          click={Especiales}
        ></ButtonAction>
        <ButtonAction
          title="%"
          btnDiferencia="Prin"
          click={Especiales}
        ></ButtonAction>
        <ButtonAction
          title="/"
          btnDiferencia="Ope"
          click={AgregarOperador}
        ></ButtonAction>
      </div>
      <div className="flex  items-center justify-center">
        <ButtonAction
          title="7"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="8"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="9"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="x"
          btnDiferencia="Ope"
          click={AgregarOperador}
        ></ButtonAction>
      </div>
      <div className="flex  items-center justify-center">
        <ButtonAction
          title="4"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="5"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="6"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="-"
          btnDiferencia="Ope"
          click={AgregarOperador}
        ></ButtonAction>
      </div>
      <div className="flex  items-center justify-center">
        <ButtonAction
          title="1"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="2"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="3"
          btnDiferencia="Num"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="+"
          btnDiferencia="Ope"
          click={AgregarOperador}
        ></ButtonAction>
      </div>
      <div className="flex  items-center justify-center">
        <ButtonAction
          title="0"
          btnDiferencia="Num0"
          click={AgregarNumero}
        ></ButtonAction>
        <ButtonAction
          title="."
          btnDiferencia="Num"
          click={AgregarPunto}
        ></ButtonAction>
        <ButtonAction
          title="="
          btnDiferencia="Ope"
          click={Especiales}
        ></ButtonAction>
      </div>
    </div>
  );
}
