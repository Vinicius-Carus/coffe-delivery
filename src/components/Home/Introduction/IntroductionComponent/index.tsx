import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { IntroductionStyle } from "./style";
import AdvantagesItem from "../AdvantagesItem";

export const Introduction = () => {
  return (
    <IntroductionStyle>
      <div className="introduction-div">
        <div className="info-div">
          <div className="text-div">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="advantages-div">
            <div className="advantages-row">
              <AdvantagesItem
                $colorBox="yellow-dark"
                icon={<ShoppingCart weight="fill" />}
              >
                Compra simples e segura
              </AdvantagesItem>
              <AdvantagesItem
                $colorBox="base-text"
                $width="18.375rem"
                icon={<Package weight="fill" />}
              >
                Embalagem mantém o café intacto
              </AdvantagesItem>
            </div>
            <div className="advantages-row">
              <AdvantagesItem $colorBox="yellow" icon={<Timer weight="fill" />}>
                Entrega rápida e rastreada
              </AdvantagesItem>
              <AdvantagesItem
                $colorBox="purple"
                $width="18.375rem"
                icon={<Coffee weight="fill" />}
              >
                O café chega fresquinho até você
              </AdvantagesItem>
            </div>
          </div>
        </div>
        <div className="image-div">
          <img src="images/image_body.png" alt="" />
        </div>
      </div>
    </IntroductionStyle>
  );
};
