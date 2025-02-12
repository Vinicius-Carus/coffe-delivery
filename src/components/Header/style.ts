import styled from "styled-components";
import { textS } from "../../styles/fonts";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .header-div {
    width: 77%;
    max-width: 70rem;

    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    align-items: center;

    .logo-div {
      width: 5.62rem;

      img {
        object-fit: contain;
      }

      a:active,
      a:focus {
        box-shadow: none;
      }
    }

    .actions-div {
      width: 12.063rem;
      display: flex;
      gap: 0.75rem;
      height: 2.375rem;

      .location-div {
        width: 8.938rem;
        background-color: ${({ theme }) => theme["purple-light"]};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;

        p {
          display: flex;
          gap: 0.125rem;

          justify-content: center;
          align-items: center;
          color: ${({ theme }) => theme["purple-dark"]};

          & > svg {
            fill: ${({ theme }) => theme["purple"]};
          }

          ${textS}
        }
      }
    }
  }
`;
