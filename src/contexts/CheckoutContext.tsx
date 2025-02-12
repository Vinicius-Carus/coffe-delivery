import React, { createContext, useState } from "react";

interface ICheckoutDatas {
  zipcode: string;
  street: string;
  number: string;
  additionalInfo?: string;
  district: string;
  city: string;
  uf: string;
  payment: "creditCard" | "debitCard" | "money";
}

interface ICheckoutContext {
  checkoutDatas?: ICheckoutDatas;
  setCheckoutDatas: React.Dispatch<
    React.SetStateAction<ICheckoutDatas | undefined>
  >;
}

export const CheckoutContext = createContext({} as ICheckoutContext);

export default function CheckoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checkoutDatas, setCheckoutDatas] = useState<ICheckoutDatas>();

  return (
    <CheckoutContext.Provider
      value={{ checkoutDatas: checkoutDatas, setCheckoutDatas }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
