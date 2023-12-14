import styled, { css } from "styled-components";
import { Typography, TypographyProps } from "~/foundation";
import { ColorPaletteProps, Palette } from "~/foundation";
import { TextProps } from "./Text.types";
import { MarginProps } from "~/types/componentProps";

// NOTE : palette에서 color 가져오기
const getTextColor = (color: ColorPaletteProps) => {
  return Palette[color];
};

const getTypoGraphy = (typo: TypographyProps) => {
  return Typography[typo];
};

const getEllipsisLineStyle = (ellipsisLine) => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${ellipsisLine};
  `;
};

const hoverStyle = css`
  &:hover {
    color: ${Palette["gray-500"]};
    transition: 0.1s ease-in-out;
  }
`;

export const TextView = styled.p<TextProps>`
  ${(props) => getTypoGraphy(props.typo as TypographyProps)};
  color: ${(props) => getTextColor(props.color as ColorPaletteProps)};
  white-space: ${({ whitespace }) => whitespace};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
  ${({ ellipsis, ellipsisLine }) =>
    ellipsis && getEllipsisLineStyle(ellipsisLine)};
  word-break: break-all;
  ${({ hover }) => hover && hoverStyle};
`;

export default TextView;
