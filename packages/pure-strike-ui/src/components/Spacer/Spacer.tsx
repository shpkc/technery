import React, { forwardRef } from "react";
import Styled from "./Spacer.styled";
import { SpacerProps } from "./Spacer.types";

export const Spacer = forwardRef(
  ({ width, height, ...rest }: SpacerProps, forwardRef) => {
    return <Styled width={width} height={height} {...rest} />;
  }
);
