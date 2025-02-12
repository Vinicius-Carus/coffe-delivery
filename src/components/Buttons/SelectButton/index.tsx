import { useFormContext } from "react-hook-form";
import { ISelectButtonStyleProps, SelectButtonStyle } from "./style";
import React from "react";

interface ISelectButtonProps extends React.ComponentProps<"input"> {
  selectButtonStyleProps?: ISelectButtonStyleProps;
  name: string;
}

export default function SelectButton({
  selectButtonStyleProps,
  id,
  children,
  name,
  ...props
}: ISelectButtonProps) {
  const { register } = useFormContext();
  return (
    <SelectButtonStyle {...selectButtonStyleProps}>
      <input type="radio" id={id} value={id} {...register(name)} {...props} />
      <label htmlFor={id}>{children}</label>
    </SelectButtonStyle>
  );
}
