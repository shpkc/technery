import styled, { css } from "styled-components";
import { BorderProps, StackProps } from "./Stack.types";
import { Palette } from "~/foundation";
import { MarginProps, PaddingProps } from "~/types/componentProps";
import { getResponsiveStyles } from "~/foundation/responsive";

// NOTE : string이면 그대로 string으로 반환(ex : 100vh or 100vw), 그 외에는 px로 반환
const getPixelByType = (value: number | string) => {
  if (typeof value === "string") {
    return css`
      ${value};
    `;
  }
  return css`
    ${value + "px"};
  `;
};

const getBorderStyle = ({
  borderWidth,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
}: BorderProps) => {
  // NOTE : true일 경우만 border 표시
  const getBorderStyle = (position?: boolean) => {
    return position ? "solid" : "none";
  };

  const getBorderColor = (borderColor) => {
    return Palette[borderColor];
  };

  return css`
    border-width: ${borderWidth}px;
    border-color: ${getBorderColor(borderColor)};
    box-sizing: border-box;
    border-style: ${getBorderStyle(borderTop)} ${getBorderStyle(borderRight)}
      ${getBorderStyle(borderBottom)} ${getBorderStyle(borderLeft)};
  `;
};

const getBackgroundColor = (backgroundColor) => {
  return Palette[backgroundColor];
};

export const Container = styled.div<StackProps>`
  position: ${({ position }) => position};

  ${(props) => getResponsiveStyles("width", props.width)};
  min-width: ${({ minWidth }) => minWidth && getPixelByType(minWidth)};

  height: ${({ height }) => (height ? getPixelByType(height) : "100%")};
  min-height: ${({ minHeight }) => minHeight && getPixelByType(minHeight)};
  max-height: ${({ maxHeight }) => maxHeight && getPixelByType(maxHeight)};

  top: ${({ top }) => top && top + "px"};
  right: ${({ right }) => right && right + "px"};
  bottom: ${({ bottom }) => bottom && bottom + "px"};
  left: ${({ left }) => left && left + "px"};

  ${(props) => getResponsiveStyles("margin", props.margin)};
  ${(props) => getResponsiveStyles("padding", props.padding)};

  background-color: ${({ backgroundColor }) =>
    getBackgroundColor(backgroundColor)};

  ${({ borderWidth }) => borderWidth && getBorderStyle};
  z-index: ${({ zIndex }) => zIndex};
  border-radius: ${({ borderRadius }) =>
    borderRadius && getPixelByType(borderRadius)};
`;
