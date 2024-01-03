import { css } from "styled-components";
import ButtonProps from "~/components/Button/Button.types";
import { Palette } from "../colors/palette";

const Primary = css`
  background-color: ${Palette["black-origin"]};
  transition: 0.1s ease-in-out;
  color: white;
  &:disabled {
    background-color: ${Palette["gray-200"]};
    color: ${Palette["gray-400"]};
  }
  &:hover {
    background-color: ${Palette["black-origin-80"]};
  }
`;

const Outline = css`
  background-color: ${Palette["white"]};
  border: 1px solid ${Palette["gray-300"]};
  transition: 0.1s ease-in-out;
  color: black;
  &:hover {
    background-color: ${Palette["gray-200"]};
  }
`;

const Secondary = css`
  background-color: white;
  border: 1px solid ${Palette["orange-200"]};
  border-radius: 4px;
`;

const Like = css`
  background-color: ${Palette["gray-300"]};
  &:hover {
    background-color: ${Palette["red-300"]};
    color: white;
    transition: 0.1s ease-in-out;
    p {
      color: white;
    }
    svg {
      fill: white;
    }
  }
`;

export const ButtonStyleVariants = {
  Primary,
  Secondary,
  Outline,
  Like,
};

// NOTE : 키값으로 type 생성
export type ButtonStyleVariantType = keyof typeof ButtonStyleVariants;
