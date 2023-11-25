import styled, { css } from "styled-components";
import { GridProps } from "./Grid.types";

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColums }) =>
    `repeat(${gridTemplateColums}, 1fr)`};
  grid-column-gap: ${({ gridColumnGap }) => gridColumnGap + "px"};
  grid-row-gap: ${({ gridRowGap }) => gridRowGap + "px"};
`;
