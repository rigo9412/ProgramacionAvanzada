import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import ButtonAction from "../components/ButtonAction";
import InputNumber from "../components/InputNumber";

export default function Home() {
  return (
    <div className="flex-col bg-black items-center justify-center">
      <div className="flex items-center justify-center">
        <InputNumber
          background="bg-black"
          color="text-white"
          wh="w-80 h-20"
        ></InputNumber>
      </div>

      <div class="flex  items-center justify-center">
        <ButtonAction
          title="AC"
          background="bg-gray-ios"
          wh="w-20 h-20"
          color="text-black"
          hover="hover:bg-gray-ios-100 active:bg-gray-ios"
        ></ButtonAction>
        <ButtonAction
          title="+/-"
          background="bg-gray-ios"
          wh="w-20 h-20"
          color="text-black"
          hover="hover:bg-gray-ios-100 active:bg-gray-ios"
        ></ButtonAction>
        <ButtonAction
          title="%"
          background="bg-gray-ios"
          wh="w-20 h-20"
          color="text-black"
          hover="hover:bg-gray-ios-100 active:bg-gray-ios"
        ></ButtonAction>
        <ButtonAction
          title="/"
          background="bg-orange-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-orange-ios-100 active:bg-orange-ios"
        ></ButtonAction>
      </div>
      <div class="flex  items-center justify-center">
        <ButtonAction
          title="7"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="8"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="9"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="x"
          background="bg-orange-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-orange-ios-100 active:bg-orange-ios"
        ></ButtonAction>
      </div>
      <div class="flex  items-center justify-center">
        <ButtonAction
          title="4"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="5"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="6"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="-"
          background="bg-orange-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-orange-ios-100 active:bg-orange-ios"
        ></ButtonAction>
      </div>
      <div class="flex  items-center justify-center">
        <ButtonAction
          title="1"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="2"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="3"
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="+"
          background="bg-orange-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-orange-ios-100 active:bg-orange-ios"
        ></ButtonAction>
      </div>
      <div class="flex  items-center justify-center">
        <ButtonAction
          title="0"
          background="bg-grayfull-ios"
          wh="w-40 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="."
          background="bg-grayfull-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-grayfull-ios-100 active:bg-grayfull-ios"
        ></ButtonAction>
        <ButtonAction
          title="="
          background="bg-orange-ios"
          wh="w-20 h-20"
          color="text-white"
          hover="hover:bg-orange-ios-100 active:bg-orange-ios"
        ></ButtonAction>
      </div>
    </div>
  );
}
