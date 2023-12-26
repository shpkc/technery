import React, { forwardRef } from "react";
import Styled from "./Icon.styled";
import { IconProps, IconSize } from "./Icon.types";
import { MouseEventHandler } from "~/types/events";
import { noop } from "~/utils/funtionUtils";

export const Icon = forwardRef(
  (
    { source, size = IconSize.Size32, color, onClick = noop, style }: IconProps,
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
        onClick={handleClick}
        style={style}
      />
    );
  }
);
