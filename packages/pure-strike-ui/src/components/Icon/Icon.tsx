import React, { forwardRef } from "react";
import Styled from "./Icon.styled";
import { IconProps, IconSize } from "./Icon.types";
import { MouseEventHandler } from "~/types/events";
import { noop } from "~/utils/funtionUtils";

export const Icon = forwardRef(
  (
    {
      source,
      size = IconSize.Size32,
      color,
      marginTop = 0,
      marginRight = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginX = 0,
      marginY = 0,
      marginAll = 0,
      onClick = noop,
      style,
    }: IconProps,
    forwardRef
  ) => {
    const handleClick = React.useCallback<MouseEventHandler>(
      (event) => {
        onClick(event);
      },
      [onClick]
    );
    return (
      <Styled
        as={source}
        width={size}
        height={size}
        color={color}
        marginTop={marginTop || marginY || marginAll}
        marginRight={marginRight || marginX || marginAll}
        marginBottom={marginBottom || marginY || marginAll}
        marginLeft={marginLeft || marginX || marginAll}
        onClick={handleClick}
        style={style}
      />
    );
  }
);
