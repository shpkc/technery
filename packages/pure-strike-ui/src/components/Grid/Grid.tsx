import React, { forwardRef } from "react";
import * as Styled from "./Grid.styled";
import { GridProps } from "./Grid.types";

export const Grid = forwardRef(
  (
    {
      gridTemplateColums,
      gridColumnGap = 0,
      gridRowGap = 0,
      gridAutoFlow,
      children,
      ...rest
    }: GridProps,
    forwardRef
  ) => {
    return (
      <Styled.GridWrapper
        gridTemplateColums={gridTemplateColums}
        gridColumnGap={gridColumnGap}
        gridRowGap={gridRowGap}
        gridAutoFlow={gridAutoFlow}
        {...rest}
      >
        {children}
      </Styled.GridWrapper>
    );
  }
);
