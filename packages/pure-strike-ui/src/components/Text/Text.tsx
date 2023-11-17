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
      marginTop = 0,
      marginRight = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginX = 0,
      marginY = 0,
      marginAll = 0,
      style,
      id,
      className,
      whitespace = "normal",
      cursor = "inherit",
      align = "start",
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
        marginTop={marginTop || marginY || marginAll}
        marginRight={marginRight || marginX || marginAll}
        marginBottom={marginBottom || marginY || marginAll}
        marginLeft={marginLeft || marginX || marginAll}
        whitespace={whitespace}
        cursor={cursor}
        align={align}
        onClick={onClick}
      >
        {children}
      </Styled>
    );
  }
);
