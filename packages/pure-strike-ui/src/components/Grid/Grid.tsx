import React, { forwardRef } from "react";
import * as Styled from "./Grid.styled";
import { GridProps } from "./Grid.types";

export const Grid = forwardRef(
  ({ children, ...rest }: GridProps, forwardRef) => {
    return <Styled.GridWrapper {...rest}>{children}</Styled.GridWrapper>;
  }
);
