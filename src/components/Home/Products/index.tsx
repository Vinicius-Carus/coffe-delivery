import { products } from "../../../utils/variables";
import HomeCard from "../../Cards/HomeCard";
import { ProductsStyle } from "./style";

export default function Products() {
  return (
    <ProductsStyle>
      <div className="products-body">
        <h2>Nossos Cafés</h2>
        <div className="products-list">
          {products.map((product) => (
            <div key={product.title}>
              <HomeCard
                imageSrc={product.imageSrc}
                tags={product.tags}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </ProductsStyle>
  );
}
