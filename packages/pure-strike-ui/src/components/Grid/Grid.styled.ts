import styled, { css } from "styled-components";
import { getResponsiveStyles } from "~/foundation/responsive";
import { GridProps } from "./Grid.types";

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  ${(props) =>
    getResponsiveStyles("grid-template-columns", props.gridTemplateColums)};

  grid-column-gap: ${({ gridColumnGap }) => gridColumnGap + "px"};
  grid-row-gap: ${({ gridRowGap }) => gridRowGap + "px"};
`;
