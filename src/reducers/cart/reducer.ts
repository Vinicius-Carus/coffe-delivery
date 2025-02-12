import { produce } from "immer";
import { roundNumberLesser, roundNumberUpper } from "../../utils/roundNumber";
import { ActionTypes } from "./actions";

interface IActionReducer {
  type: any;
  payload: IProductsType;
}

export interface IProductsType {
  name: string;
  price: number;
  src: string;
  quantity: number;
}

export interface ICartType {
  products: IProductsType[];
  productsLength: number;
}

export function cartReducer(state: ICartType, action: IActionReducer) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      const newProduct = action.payload;

      const productActualDataIndex = state.products.findIndex(
        (productState) => productState.name === newProduct.name
      );

      if (productActualDataIndex >= 0) {
        return produce(state, (draft) => {
          draft.products[productActualDataIndex].quantity +=
            newProduct.quantity;
          draft.productsLength += newProduct.quantity;
        });
      }

      return produce(state, (draft) => {
        draft.products.push(newProduct);
        draft.productsLength += newProduct.quantity;
      });

    case ActionTypes.ADD_QUANTITY:
      const productToAddQuantity = action.payload;
      const productToAddQuantityActualIndex = state.products.findIndex(
        (productState) => productState.name === productToAddQuantity.name
      );

      return produce(state, (draft) => {
        draft.products[productToAddQuantityActualIndex].quantity +=
          productToAddQuantity.quantity;
        draft.products[productToAddQuantityActualIndex].quantity =
          roundNumberUpper(
            draft.products[productToAddQuantityActualIndex].quantity,
            999
          );

        draft.productsLength += productToAddQuantity.quantity;
      });

    case ActionTypes.REMOVE_QUANTITY:
      const productToRemoveQuantity = action.payload;
      const productToRemoveQuantityActualIndex = state.products.findIndex(
        (productState) => productState.name === productToRemoveQuantity.name
      );

      return produce(state, (draft) => {
        draft.products[productToRemoveQuantityActualIndex].quantity -=
          productToRemoveQuantity.quantity;
        draft.products[productToRemoveQuantityActualIndex].quantity =
          roundNumberLesser(
            draft.products[productToRemoveQuantityActualIndex].quantity,
            1
          );

        draft.productsLength -= productToRemoveQuantity.quantity;
      });

    case ActionTypes.REMOVE_PRODUCT:
      const productToRemove = action.payload;

      const productsRemoved = state.products.filter(
        (product) => product.name !== productToRemove.name
      );

      return {
        products: productsRemoved,
        productsLength: state.productsLength - productToRemove.quantity,
      };

    default:
      return state;
  }
}
