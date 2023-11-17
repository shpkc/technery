import { css } from "styled-components";
import { Palette } from "../colors/palette";

const Primary = css`
  color: white;
  background-color: ${Palette["orange-200"]};
  &:disabled {
    background-color: ${Palette["gray-200"]};
    color: ${Palette["gray-400"]};
  }
`;

const Secondary = css`
  background-color: white;
  border: 1px solid ${Palette["orange-200"]};
  border-radius: 4px;
`;

export const ButtonStyleVariants = {
  Primary,
  Secondary,
};

// NOTE : 키값으로 type 생성
export type ButtonStyleVariantType = keyof typeof ButtonStyleVariants;
