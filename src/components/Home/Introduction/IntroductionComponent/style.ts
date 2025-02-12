import styled from "styled-components";
import { textLRegular, titleXL } from "../../../../styles/fonts";

export const IntroductionStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.75rem;
  .introduction-div {
    width: 77%;
    max-width: 70rem;
    display: flex;
    justify-content: space-between;

    .image-div {
      width: 29.75rem;
    }

    .info-div {
      display: flex;
      flex-direction: column;
      width: 36.75rem;

      .text-div {
        width: 100%;
        height: 12rem;
        h1 {
          ${titleXL}
        }
        p {
          margin-top: 1rem;
          ${textLRegular}
        }
      }

      .advantages-div {
        margin-top: 4.125rem;
        display: flex;
        flex-direction: column;
        height: 5.25rem;

        .advantages-row {
          display: flex;
          gap: 2.5rem;
        }

        .advantages-row:last-of-type {
          margin-top: 1.25rem;
        }
      }
    }
  }
`;
