import { useContext } from "react";
import Button from "../../Buttons/Button";
import CartCard from "../../Cards/CartCard";
import { CheckoutInformationsStyle } from "./style";
import { CartContext } from "../../../contexts/CartContext";
import { IProductsType } from "../../../reducers/cart/reducer";

export default function CheckoutInformations() {
  const {
    cart,
    totalPrice,
    totalItensPrice,
    handlePlusQuantity,
    handleMinusQuantity,
  } = useContext(CartContext);

  function onMinus(product: IProductsType) {
    const productObject = { ...product, quantity: 1 };
    handleMinusQuantity(productObject);
  }

  function onPlus(product: IProductsType) {
    const productObject = { ...product, quantity: 1 };
    handlePlusQuantity(productObject);
  }

  return (
    <CheckoutInformationsStyle>
      <h1>Cafés selecionados</h1>
      <div className="info-body">
        <div className="info-products">
          {cart.productsLength ? (
            cart.products.map((cartValue) => (
              <div key={cartValue.name}>
                <CartCard
                  product={cartValue}
                  onMinus={() => onMinus(cartValue)}
                  onPlus={() => onPlus(cartValue)}
                />
                <hr />
              </div>
            ))
          ) : (
            <h3 className="info-products-empty">Adicione um produto</h3>
          )}
        </div>
        <div className="info-price">
          <p>
            Total de Itens
            <span>
              R${" "}
              {totalItensPrice.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p>
            Entrega <span>R$ 3,50</span>
          </p>
          <p className="info-price-total">
            Total
            <span>
              R${" "}
              {totalPrice.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <Button disabled={!cart.productsLength}>Confirmar Pedido</Button>
        </div>
      </div>
    </CheckoutInformationsStyle>
  );
}
