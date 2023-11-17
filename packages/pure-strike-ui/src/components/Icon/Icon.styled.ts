import styled from "styled-components";
import { MarginProps } from "~/types/componentProps";
import { IconStyledProps } from "./Icon.types";
import { ColorPaletteProps, Palette } from "~/foundation";

const getMargin = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: MarginProps): string => {
  return `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`;
};

const getPaletteColor = (color: ColorPaletteProps) => {
  return Palette[color];
};

const Icon = styled.svg<IconStyledProps>`
  cursor: pointer;
  flex: 0 0 auto;
  margin: ${getMargin};
  color: ${(props) => getPaletteColor(props.color as ColorPaletteProps)};
`;

export default Icon;
