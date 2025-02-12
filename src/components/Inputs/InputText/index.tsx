import React from "react";
import { IInputTextStyleProps, InputTextStyle } from "./style";
import { useFormContext } from "react-hook-form";

interface IInputTextProps
  extends IInputTextStyleProps,
    React.ComponentProps<"input"> {
  name: string;
}

export default function InputText({
  $width,
  required,
  name,
  ...props
}: IInputTextProps) {
  const { register } = useFormContext();
  return (
    <>
      <InputTextStyle $width={$width}>
        <input type="text" {...register(name)} {...props} />
        {!required && <span>Opcional</span>}
      </InputTextStyle>
    </>
  );
}
