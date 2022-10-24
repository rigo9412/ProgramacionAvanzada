import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ButtonAction from '../components/button_action'
import ButtonActionLarge from '../components/button_action_large'
import InputResult from '../components/input_result'
import useMath from '../hooks/useMath'

export default function Home() {
  const [result, addNumber, addOperator, calculateResult] = useMath()
  return (
    <div className='flex-col bg-black items-center justify-center'>
      <div className="flex items-center justify-center">

        <InputResult value={result}></InputResult>

      </div>

      <div className="flex  items-center justify-center" >
        <ButtonAction title={"AC"} value="AC" onClickAction={addOperator} color="bg-slate-300" textColor="text-black" ></ButtonAction>
        <ButtonAction title={"+/-"} value="&" onClickAction={addOperator} color="bg-slate-300" textColor="text-black"></ButtonAction>
        <ButtonAction title={"%"} value="%" onClickAction={addOperator} color="bg-slate-300" textColor="text-black"></ButtonAction>
        <ButtonAction title={"/"} value="/" onClickAction={addOperator} color="bg-orange-400"></ButtonAction>
      </div>


      <div className="flex   items-center justify-center" >
        <ButtonAction title={"7"} value="7" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"8"} value="8" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"9"} value="9" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"X"} value="*" onClickAction={addOperator} color="bg-orange-400"></ButtonAction>

      </div>

      <div className="flex   items-center justify-center" >

        <ButtonAction title={"4"} value="4" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"5"} value="5" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"6"} value="6" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"-"} value="-" onClickAction={addOperator} color="bg-orange-400"></ButtonAction>
      </div>
      <div className="flex  items-center justify-center" >

        <ButtonAction title={"1"} value="1" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"2"} value="2" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"3"} value="3" onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"+"} value="+" onClickAction={addOperator} color="bg-orange-400"></ButtonAction>
      </div>
      <div  className="flex items-center justify-center" >
        <ButtonActionLarge title={"0"} value="0" onClickAction={addNumber} color="bg-zinc-500"></ButtonActionLarge>
        <ButtonAction title={"."} value="." onClickAction={addNumber} color="bg-zinc-500"></ButtonAction>
        <ButtonAction title={"="} value="=" onClickAction={calculateResult} color="bg-orange-400"></ButtonAction>
      </div>



    </div>
  )
}

