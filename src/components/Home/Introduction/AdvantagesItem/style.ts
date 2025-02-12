import styled from "styled-components";
import { textMRegular } from "../../../../styles/fonts";
import { defaultThemes } from "../../../../styles/themes/default";

export interface IAdvantagesItemStyleProps {
  $colorBox: keyof typeof defaultThemes;
  $width?: string;
}

export const AdvantagesItemStyle = styled.div<IAdvantagesItemStyleProps>`
  display: flex;
  gap: 0.75rem;
  width: ${(props) => props.$width || "14.438rem"};
  align-items: center;
  ${textMRegular}

  :last-of-type {
    width: 18.375rem;
  }

  .advantages-icon {
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme[props.$colorBox]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    svg {
      size: 1rem;
      fill: ${(props) => props.theme["white"]};
    }
  }
`;
