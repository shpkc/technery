import styled, { css } from "styled-components";
import { FlexProps, ResponsiveDirectionType } from "./Flex.types";

// NOTE : direction 반환, 추후 고도화
const getDirectionByResponsiveProps = ({
  direction,
}: {
  direction?: ResponsiveDirectionType;
}) => {
  if (typeof direction === "string")
    return css`
      flex-direction: ${direction};
    `;
  else {
    return css``;
  }
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? height : "100%")};

  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignment }) => alignment};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  gap: ${({ gap }) => gap + "px"};

  ${getDirectionByResponsiveProps};
`;
