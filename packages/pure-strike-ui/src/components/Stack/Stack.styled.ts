import styled, { css } from "styled-components";
import { BorderProps, StackProps } from "./Stack.types";
import { Palette } from "~/foundation";
import { MarginProps, PaddingProps } from "~/types/componentProps";

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

// NOTE : margin string으로 들어오면 그로 반환, 그 외에는 number로 처리
const getMargin = ({
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: MarginProps): string => {
  if (margin) {
    return margin;
  }
  return `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`;
};

const getPadding = ({
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: PaddingProps): string => {
  return `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
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

  width: ${({ width }) => (width ? getPixelByType(width) : "100%")};
  min-width: ${({ width }) => width && getPixelByType(width)};

  height: ${({ height }) => (height ? getPixelByType(height) : "100%")};
  min-height: ${({ height }) => height && getPixelByType(height)};

  top: ${({ top }) => top && top + "px"};
  right: ${({ right }) => right && right + "px"};
  bottom: ${({ bottom }) => bottom && bottom + "px"};
  left: ${({ left }) => left && left + "px"};

  margin: ${getMargin};

  padding: ${getPadding};
  background-color: ${({ backgroundColor }) =>
    getBackgroundColor(backgroundColor)};

  ${({ borderWidth }) => borderWidth && getBorderStyle};
  z-index: ${({ zIndex }) => zIndex};
  border-radius: ${({ borderRadius }) => borderRadius + "px"};
`;
