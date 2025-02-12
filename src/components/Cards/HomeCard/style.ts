import styled from "styled-components";
import { tagFont, textS, titleM, titleS } from "../../../styles/fonts";
import { unselectText } from "../../../styles/utils";

export const HomeCardStyle = styled.div`
  height: 20.625rem;
  width: 16rem;
  display: flex;
  align-items: end;
  ${unselectText}

  .main-card-home {
    width: 100%;
    height: 19.375rem;
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 6px 36px 6px 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .card-header {
      width: 100%;
      height: 7rem;
      position: relative;

      img {
        position: absolute;
        top: -30px;
        width: 7.5rem;
        height: 7.5rem;
        left: 4.25rem;
      }
    }

    .card-body {
      display: flex;
      flex-direction: column;
      text-align: center;
      .tag-container {
        display: flex;
        justify-content: center;
        gap: 0.25rem;

        .tag {
          ${tagFont}
          text-transform : uppercase;
          padding: 0.25rem 0.5rem;
          background-color: ${(props) => props.theme["yellow-light"]};
          color: ${(props) => props.theme["yellow-dark"]};
          border-radius: 100px;
        }
      }

      .title {
        margin-top: 1rem;
        ${titleS};
      }

      .description {
        ${textS}
        color: ${(props) => props.theme["base-label"]};
        max-width: 13.5rem;
        margin-top: 0.5rem;
      }
    }

    .card-footer {
      display: flex;
      margin-top: 2rem;
      width: 13rem;

      .price-div {
        width: 50%;
        margin-top: 0.219rem;
        p {
          ${titleM}

          span {
            ${textS}
          }
        }
      }

      .buttons-div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
      }
    }
  }
`;
