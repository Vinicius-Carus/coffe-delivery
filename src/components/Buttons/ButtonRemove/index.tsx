import { Trash } from "@phosphor-icons/react";
import { ButtonRemoveStyle, IButtonRemoveStyleProps } from "./style";
import { defaultThemes } from "../../../styles/themes/default";

interface IButtonRemoveProps
  extends IButtonRemoveStyleProps,
    React.ComponentProps<"button"> {}

export default function ButtonRemove({ ...props }: IButtonRemoveProps) {
  return (
    <ButtonRemoveStyle {...props}>
      <Trash weight="regular" color={defaultThemes.purple} size={16} />
      REMOVER
    </ButtonRemoveStyle>
  );
}
