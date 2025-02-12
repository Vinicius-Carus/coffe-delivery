import { ShoppingCart } from "@phosphor-icons/react";
import { IMarketButtonStyleProps, MarketButtonStyle } from "./style";

interface IMarketButtonProps
  extends IMarketButtonStyleProps,
    React.ComponentProps<"button"> {}

export default function MarketButton({ ...props }: IMarketButtonProps) {
  return (
    <MarketButtonStyle {...props}>
      <ShoppingCart weight="fill" size={22} color="#FFFFFF" />
    </MarketButtonStyle>
  );
}
