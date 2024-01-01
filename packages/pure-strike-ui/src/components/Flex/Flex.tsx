import React, { forwardRef } from "react";
import * as Styled from "./Flex.styled";
import { FlexProps } from "./Flex.types";
import { noop } from "~/utils/funtionUtils";

export const Flex = forwardRef(
  (
    {
      direction = "row",
      justify,
      alignment,
      flexWrap = "nowrap",
      gap = 0,
      overflow = "visible",
      onClick = noop,
      children,
      ...rest
    }: FlexProps,
    forwardRef
  ) => {
    return (
      <Styled.Flex
        direction={direction}
        justify={justify}
        alignment={alignment}
        flexWrap={flexWrap}
        gap={gap}
        overflow={overflow}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Styled.Flex>
    );
  }
);
