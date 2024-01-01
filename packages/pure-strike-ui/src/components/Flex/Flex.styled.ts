import styled, { css } from "styled-components";
import { getResponsiveStyles } from "~/foundation/responsive";
import { FlexProps } from "./Flex.types";

export const Flex = styled.div<FlexProps>`
  display: flex;

  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignment }) => alignment};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap + "px"};
  overflow: ${({ overflow }) => overflow};

  ${(props) => getResponsiveStyles("flex-direction", props.direction)};
`;
