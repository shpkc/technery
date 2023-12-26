import React, { forwardRef } from "react";
import type { TextProps } from "./Text.types";
import Styled from "./Text.styled";
import { noop } from "~/utils/funtionUtils";

export const Text = forwardRef(
  (
    {
      as,
      color,
      typo,
      style,
      id,
      className,
      whitespace = "normal",
      cursor = "inherit",
      align = "start",
      ellipsis = false,
      ellipsisLine = 0,
      hover = false,
      onClick = noop,
      children,
      ...rest
    }: TextProps,
    forwardedRef: React.Ref<HTMLElement>
  ) => {
    return (
      <Styled
        {...rest}
        as={as}
        id={id}
        style={style}
        ref={forwardedRef}
        className={className}
        color={color}
        typo={typo}
        whitespace={whitespace}
        ellipsis={ellipsis}
        ellipsisLine={ellipsisLine}
        cursor={cursor}
        align={align}
        hover={hover}
        onClick={onClick}
      >
        {children}
      </Styled>
    );
  }
);
