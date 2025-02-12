import { HomeStyle } from "./style";
import { Introduction } from "../../components/Home/Introduction/IntroductionComponent";
import Products from "../../components/Home/Products";

export const Home = () => {
  return (
    <HomeStyle>
      <Introduction />
      <Products />
    </HomeStyle>
  );
};
