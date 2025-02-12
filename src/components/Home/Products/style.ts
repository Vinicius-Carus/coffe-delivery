import styled from "styled-components";
import { titleL } from "../../../styles/fonts";

export const ProductsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8.75rem;

  .products-body {
    width: 77%;
    max-width: 70rem;

    display: flex;
    flex-direction: column;
    h2 {
      margin-bottom: 3.375rem;
      ${titleL}
    }

    .products-list {
      align-self: center;
      display: grid;

      grid-template-columns: repeat(4, 17rem);
      grid-template-rows: repeat(4, 21rem);
      gap: 0.75rem;
      margin-bottom: 3.375rem;
    }
  }
`;
