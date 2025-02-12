import React from "react";
import { IInputNumberStyleProps, InputNumberStyle } from "./style";
import { Minus, Plus } from "@phosphor-icons/react";

interface IInputNumberProps extends IInputNumberStyleProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  onPlus?: () => void;
  onMinus?: () => void;
}

export default function InputNumber({
  number,
  setNumber,
  onPlus,
  onMinus,
  ...props
}: IInputNumberProps) {
  function handleMinus() {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
      if (onMinus) onMinus();
    }
  }

  function handlePlus() {
    if (number < 999) {
      setNumber((prevNumber) => prevNumber + 1);
      if (onPlus) onPlus();
    }
  }

  return (
    <InputNumberStyle {...props}>
      <span onClick={handleMinus} id="minus">
        <Minus size={14} weight="bold" />
      </span>
      <div>{number}</div>
      <span onClick={handlePlus} id="plus">
        <Plus size={14} weight="bold" />
      </span>
    </InputNumberStyle>
  );
}
