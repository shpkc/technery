import React, { forwardRef } from "react";
import * as Styled from "./Stack.styled";
import { StackProps } from "./Stack.types";
import { noop } from "~/utils/funtionUtils";
import { ZIndex } from "~/foundation";

export const Stack = forwardRef(
  (
    {
      position,
      top,
      width,
      maxWidth,
      height,
      marginTop = 0,
      marginRight = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginX = 0,
      marginY = 0,
      marginAll = 0,
      paddingTop = 0,
      paddingRight = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      paddingX = 0,
      paddingY = 0,
      paddingAll = 0,
      borderWidth,
      borderColor,
      borderBottom,
      backgroundColor = "transparent",
      zIndex = ZIndex.Auto,
      borderRadius = 0,
      onClick = noop,
      children,
      ...rest
    }: StackProps,
    forwardRef
  ) => {
    return (
      <Styled.Container
        position={position}
        top={top}
        width={width}
        maxWidth={maxWidth}
        height={height}
        marginTop={marginTop || marginY || marginAll}
        marginRight={marginRight || marginX || marginAll}
        marginBottom={marginBottom || marginY || marginAll}
        marginLeft={marginLeft || marginX || marginAll}
        paddingTop={paddingTop || paddingY || paddingAll}
        paddingRight={paddingRight || paddingX || paddingAll}
        paddingBottom={paddingBottom || paddingY || paddingAll}
        paddingLeft={paddingLeft || paddingX || paddingAll}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderBottom={borderBottom}
        backgroundColor={backgroundColor}
        zIndex={zIndex}
        borderRadius={borderRadius}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Styled.Container>
    );
  }
);
