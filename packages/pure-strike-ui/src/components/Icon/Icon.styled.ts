import styled from "styled-components";
import { MarginProps } from "~/types/componentProps";
import { IconStyledProps } from "./Icon.types";
import { ColorPaletteProps, Palette } from "~/foundation";

const getPaletteColor = (color: ColorPaletteProps) => {
  return Palette[color];
};

const Icon = styled.svg<IconStyledProps>`
  cursor: pointer;
  flex: 0 0 auto;
  color: ${(props) => getPaletteColor(props.color as ColorPaletteProps)};
`;

export default Icon;
