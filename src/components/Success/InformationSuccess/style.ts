import styled from "styled-components";
import { textMBold, textMRegular } from "../../../styles/fonts";

interface IInformationSuccessStyleProps {
  $backgroundIconColor: string;
}

export const InformationSuccessStyle = styled.div<IInformationSuccessStyleProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  .icon {
    width: 2rem;
    height: 2rem;
    background-color: ${({ $backgroundIconColor }) => $backgroundIconColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    p {
      ${textMRegular}

      color: ${({ theme }) => theme["base-subtitle"]};

      span {
        ${textMBold}
      }
    }
  }
`;
