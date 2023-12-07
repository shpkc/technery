import { css } from "styled-components";
import ButtonProps from "~/components/Button/Button.types";
import { Palette } from "../colors/palette";

const Primary = css<ButtonProps>`
  background-color: ${Palette.white};
  border: 1px solid ${Palette["gray-300"]};
  transition: 0.1s ease-in-out;
  &:disabled {
    background-color: ${Palette["gray-200"]};
    color: ${Palette["gray-400"]};
  }
  &:hover {
    background-color: ${Palette["black-origin"]};
    color: white;
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${Palette["black-origin"]};
      p {
        color: white;
      }
    `}
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
