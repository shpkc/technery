import React, { forwardRef } from "react";
import Styled from "./Divider.styled";
import { DividerProps } from "./Divider.types";

export const Divider = forwardRef(
  ({ width, height, color, ...rest }: DividerProps, forwardRef) => {
    return <Styled width={width} height={height} color={color} {...rest} />;
  }
);
