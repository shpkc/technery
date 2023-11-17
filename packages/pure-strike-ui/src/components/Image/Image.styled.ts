import styled from "styled-components";
import { ImageProps } from "./Image.types";
import { MarginProps } from "~/types/componentProps";

const getMargin = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: MarginProps): string => {
  return `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`;
};

const Image = styled.img<ImageProps>`
  cursor: pointer;
  width: ${({ width }) => width && width + "px"};
  height: ${({ height }) => height && height + "px"};
  margin: ${getMargin};
`;

export default Image;
