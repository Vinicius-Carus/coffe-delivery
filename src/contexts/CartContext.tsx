import React, { createContext, useEffect, useReducer } from "react";
import {
  cartReducer,
  ICartType,
  IProductsType,
} from "../reducers/cart/reducer";
import {
  addNewProduct,
  addQuantity,
  removeProduct,
  removeQuantity,
} from "../reducers/cart/actions";

interface ICartContextType {
  cart: ICartType;
  handleAddNewProduct: (newProduct: IProductsType) => void;
  handlePlusQuantity: (product: IProductsType) => void;
  handleMinusQuantity: (product: IProductsType) => void;
  handleRemoveProduct: (product: IProductsType) => void;
  totalPrice: number;
  totalItensPrice: number;
}

export const CartContext = createContext({} as ICartContextType);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
      productsLength: 0,
    },
    (initialState) => {
      const cartLocalStorage = localStorage.getItem(
        "@coffe-delivery:cart-1.0.0"
      );

      if (cartLocalStorage) return JSON.parse(cartLocalStorage);

      return initialState;
    }
  );

  function handleAddNewProduct(newProduct: IProductsType) {
    dispatch(addNewProduct(newProduct));
  }

  function handlePlusQuantity(product: IProductsType) {
    dispatch(addQuantity(product));
  }

  function handleMinusQuantity(product: IProductsType) {
    dispatch(removeQuantity(product));
  }

  function handleRemoveProduct(product: IProductsType) {
    dispatch(removeProduct(product));
  }

  const totalItensPrice = cart.products.reduce(
    (value, actualCart) => value + actualCart.price * actualCart.quantity,
    0
  );

  const deliveryPrice = 3.5;

  const totalPrice = totalItensPrice + deliveryPrice;

  useEffect(() => {
    localStorage.setItem("@coffe-delivery:cart-1.0.0", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddNewProduct,
        totalItensPrice,
        totalPrice,
        handlePlusQuantity,
        handleMinusQuantity,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
