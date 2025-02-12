import React, { useContext, useState } from "react";
import ButtonRemove from "../../Buttons/ButtonRemove";
import InputNumber from "../../Inputs/InputNumber";
import { CartCardStyle, ICartCardStyleProps } from "./style";
import { CartContext } from "../../../contexts/CartContext";
import { IProductsType } from "../../../reducers/cart/reducer";

interface ICartCardProps
  extends React.ComponentProps<"div">,
    ICartCardStyleProps {
  product: IProductsType;
  onPlus: () => void;
  onMinus: () => void;
}

export default function CartCard({
  product,
  onPlus,
  onMinus,
  ...props
}: ICartCardProps) {
  // States
  const [number, setNumber] = useState(product.quantity);

  const { handleRemoveProduct } = useContext(CartContext);

  return (
    <CartCardStyle {...props}>
      <div className="image-div">
        <img src={product.src} alt="" />
      </div>
      <div className="title-actions-div">
        <div className="title-div">
          <p>{product.name}</p>
        </div>
        <div className="actions-div">
          <InputNumber
            number={number}
            setNumber={setNumber}
            onMinus={onMinus}
            onPlus={onPlus}
          />
          <ButtonRemove
            type="button"
            onClick={() => handleRemoveProduct(product)}
          />
        </div>
      </div>
      <div className="price-div">
        <p>
          R${" "}
          {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </div>
    </CartCardStyle>
  );
}
