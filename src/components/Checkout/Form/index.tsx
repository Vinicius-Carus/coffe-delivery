import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import InputText from "../../Inputs/InputText";
import { CheckoutFormStyle } from "./style";
import { defaultThemes } from "../../../styles/themes/default";
import SelectButton from "../../Buttons/SelectButton";
import ErrorField from "../../Inputs/ErrorField";

export default function CheckoutForm() {
  return (
    <CheckoutFormStyle>
      <h1>Complete seu pedido</h1>

      <div className="address-form">
        <div className="form-header">
          <div className="form-header-title">
            <h2>
              <MapPinLine
                size={22}
                color={defaultThemes["yellow-dark"]}
                weight="regular"
              />{" "}
              Endereço de entrega
            </h2>
          </div>
          <p className="form-header-text">
            Informe o endereço onde deseja receber o pedido
          </p>
        </div>
        <div className="address-form-body">
          <div className="address-form-body-input">
            <div>
              <InputText
                placeholder="CEP"
                $width="12.5rem"
                required
                name="zipcode"
              />
              <ErrorField name="zipcode" />
            </div>
          </div>
          <div className="address-form-body-input">
            <div>
              <InputText
                placeholder="Rua"
                $width="35rem"
                required
                name="street"
              />
              <ErrorField name="street" />
            </div>
          </div>
          <div className="address-form-body-input">
            <div>
              <InputText
                placeholder="Número"
                $width="12.5rem"
                required
                name="number"
              />
              <ErrorField name="number" />
            </div>
            <div>
              <InputText
                placeholder="Complemento"
                $width="21.75rem"
                name="additionalInfo"
              />
              <ErrorField name="additionalInfo" />
            </div>
          </div>
          <div className="address-form-body-input">
            <div>
              <InputText
                placeholder="Bairro"
                $width="12.5rem"
                required
                name="district"
              />
              <ErrorField name="district" />
            </div>
            <div>
              <InputText
                placeholder="Cidade"
                $width="17.25rem"
                required
                name="city"
              />
              <ErrorField name="city" />
            </div>
            <div>
              <InputText placeholder="UF" $width="3.75rem" name="uf" required />
              <ErrorField name="uf" />
            </div>
          </div>
        </div>
      </div>
      <div className="payment-form">
        <div className="form-header">
          <div className="form-header-title">
            <h2>
              <CurrencyDollar
                size={22}
                color={defaultThemes["purple"]}
                weight="regular"
              />
              Pagamento
            </h2>
          </div>
          <p className="form-header-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>

        <div className="payment-form-body">
          <SelectButton id="creditCard" name="payment">
            <CreditCard
              size={16}
              color={defaultThemes["purple"]}
              weight="regular"
            />
            Cartão de crédito
          </SelectButton>
          <SelectButton id="debitCard" name="payment">
            <Bank size={16} color={defaultThemes["purple"]} weight="regular" />
            Cartão de débito
          </SelectButton>
          <SelectButton id="money" name="payment">
            <Money size={16} color={defaultThemes["purple"]} weight="regular" />
            Dinheiro
          </SelectButton>
        </div>
        <ErrorField name="payment" />
      </div>
    </CheckoutFormStyle>
  );
}
