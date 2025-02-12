import { ButtonStyle, IButtonStyleProps } from "./style";

interface IButtonProps
  extends IButtonStyleProps,
    React.ComponentProps<"button"> {}

export default function Button({ children, ...props }: IButtonProps) {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}
