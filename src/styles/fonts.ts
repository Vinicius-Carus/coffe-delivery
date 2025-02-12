import { css } from "styled-components";

// Baloo 2
const baloo2Font = css`
  font-family: "Baloo 2", serif;
  line-height: 130%;
`;

const extraboldBaloo = css`
  ${baloo2Font};
  font-weight: 800;
`;

const boldBaloo = css`
  ${baloo2Font};
  font-weight: bold;
`;

// Extrabold Baloo
export const titleXL = css`
  ${extraboldBaloo};
  font-size: 3rem;
`;

export const titleL = css`
  ${extraboldBaloo};
  font-size: 2rem;
`;

export const titleM = css`
  ${extraboldBaloo};
  font-size: 1.5rem;
`;

// Bold Baloo
export const titleS = css`
  ${boldBaloo};
  font-size: 1.25rem;
`;

export const titleXS = css`
  ${boldBaloo};
  font-size: 1.125rem;
`;

// Roboto
const robotoFont = css`
  font-family: "Roboto", serif;
`;

// Line Height Roboto
export const roboto130LineHeight = css`
  ${robotoFont};
  line-height: 130%;
`;

const roboto160LineHeight = css`
  ${robotoFont};
  line-height: 160%;
`;

// Size Roboto
const textL = css`
  ${roboto130LineHeight};
  font-size: 1.25rem;
`;

const textM = css`
  ${roboto130LineHeight};
  font-size: 1rem;
`;

// Text Roboto
export const textLRegular = css`
  ${textL};
  font-weight: 400;
`;

export const textLBold = css`
  ${textL};
  font-weight: bold;
`;

export const textMRegular = css`
  ${textM};
  font-weight: 400;
`;

export const textMBold = css`
  ${textM};
  font-weight: bold;
`;

export const textS = css`
  ${roboto130LineHeight};
  font-size: 0.875rem;
  font-weight: 400;
`;

export const textXS = css`
  ${roboto130LineHeight};
  font-size: 0.75rem;
  font-weight: bold;
`;

export const tagFont = css`
  ${roboto130LineHeight};
  font-size: 0.625rem;
  font-weight: bold;
`;

export const buttonGFont = css`
  ${roboto160LineHeight};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const buttonMFont = css`
  ${roboto160LineHeight};
  font-size: 0.75rem;
  font-weight: 400;
`;
