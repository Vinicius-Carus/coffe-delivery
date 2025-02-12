import { ShoppingCart } from "@phosphor-icons/react";
import { CartStyles } from "./style";
import { defaultThemes } from "../../../styles/themes/default";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

interface ICartProps extends React.ComponentProps<"button"> {}

export default function Cart({ ...props }: ICartProps) {
  const { cart } = useContext(CartContext);
  return (
    <CartStyles {...props}>
      {cart.productsLength > 0 && (
        <span className="products-quantity">{cart.productsLength}</span>
      )}
      <ShoppingCart
        weight="fill"
        size={22}
        color={defaultThemes["yellow-dark"]}
      />
    </CartStyles>
  );
}
