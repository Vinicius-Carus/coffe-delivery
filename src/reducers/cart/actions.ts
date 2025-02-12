import { IProductsType } from "./reducer";

export enum ActionTypes {
  ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
  ADD_QUANTITY = "ADD_QUANTITY",
  REMOVE_QUANTITY = "REMOVE_QUANTITY",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

export function addNewProduct(newProduct: IProductsType) {
  return { type: "ADD_NEW_PRODUCT", payload: newProduct };
}

export function addQuantity(product: IProductsType) {
  return { type: "ADD_QUANTITY", payload: product };
}

export function removeQuantity(product: IProductsType) {
  return { type: "REMOVE_QUANTITY", payload: product };
}

export function removeProduct(product: IProductsType) {
  return { type: "REMOVE_PRODUCT", payload: product };
}
