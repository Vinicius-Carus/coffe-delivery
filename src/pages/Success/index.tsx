import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import InformationSuccess from "../../components/Success/InformationSuccess/intex";
import { defaultThemes } from "../../styles/themes/default";
import { SuccessStyle } from "./style";
import { useContext, useEffect } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { useNavigate } from "react-router-dom";
import { paymentMethods } from "../../utils/variables";

export default function Success() {
  const navigate = useNavigate();

  const { checkoutDatas } = useContext(CheckoutContext);

  useEffect(() => {
    if (!checkoutDatas) {
      console.log(checkoutDatas);
      navigate("/");
    }
  }, []);

  return (
    <SuccessStyle>
      <div className="success-body">
        <h2>Uhu! Pedido confirmado</h2>
        <p className="success-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="success-items">
          <div className="success-informations-gradients">
            <div className="success-informations">
              <InformationSuccess
                $backgroundIconColor={defaultThemes["purple"]}
                icon={<MapPin weight="fill" color="#FFF" size={16} />}
              >
                <p>
                  Entrega em{" "}
                  <span>
                    {checkoutDatas?.street}, {checkoutDatas?.number}
                  </span>
                  <br />
                  {checkoutDatas?.district} - {checkoutDatas?.city},{" "}
                  {checkoutDatas?.uf}
                </p>
              </InformationSuccess>
              <InformationSuccess
                $backgroundIconColor={defaultThemes["yellow"]}
                icon={<Timer weight="fill" color="#FFF" size={16} />}
              >
                <p>
                  Previsão de entrega
                  <br />
                  <span>20 min - 30 min</span>
                </p>
              </InformationSuccess>
              <InformationSuccess
                $backgroundIconColor={defaultThemes["yellow-dark"]}
                icon={
                  <CurrencyDollar weight="regular" color="#FFF" size={16} />
                }
              >
                <p>
                  Pagamento na entrega <br />
                  <span>
                    {checkoutDatas?.payment
                      ? paymentMethods[checkoutDatas?.payment]
                      : "Indefinido"}
                  </span>
                </p>
              </InformationSuccess>
            </div>
          </div>
          <div className="success-image">
            <img
              src="images/image_success.png"
              alt="Imagem de pessoa andando em uma moto"
            />
          </div>
        </div>
      </div>
    </SuccessStyle>
  );
}
