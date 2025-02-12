import InputNumber from "../../Inputs/InputNumber";
import MarketButton from "../../Buttons/MarketButton";
import { HomeCardStyle } from "./style";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";

interface IHomeCardProps {
  title: string;
  description: string;
  price: number;
  tags: string[];
  imageSrc: string;
}

export default function HomeCard({
  description,
  imageSrc,
  price,
  tags,
  title,
}: IHomeCardProps) {
  // States
  const [number, setNumber] = useState(1);

  // Context
  const { handleAddNewProduct } = useContext(CartContext);

  // Functions
  function handleClick() {
    handleAddNewProduct({
      name: title,
      price,
      quantity: number,
      src: imageSrc,
    });
  }

  return (
    <HomeCardStyle>
      <div className="main-card-home">
        <div className="card-header">
          <img src={imageSrc} alt="" />
        </div>
        <div className="card-body">
          <div className="tag-container">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
        <div className="card-footer">
          <div className="price-div">
            <p>
              <span>R$</span>{" "}
              {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="buttons-div">
            <InputNumber
              $height="2.375rem"
              setNumber={setNumber}
              number={number}
            />
            <MarketButton onClick={handleClick} />
          </div>
        </div>
      </div>
    </HomeCardStyle>
  );
}
