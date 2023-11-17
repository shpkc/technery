import React, { forwardRef } from "react";
import * as Styled from "./Button.styled";
import type ButtonProps from "./Button.types";
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from "./Button.types";
import { noop } from "~/utils/funtionUtils";
import { MouseEventHandler } from "~/types/events";

export const Button = forwardRef(
  (
    {
      as,
      className,
      style,
      type = "button",
      text,
      disabled = false,
      loading = false,
      active = false,
      size = ButtonSize.STANDARD,
      styleVariant = ButtonStyleVariant.Primary,
      colorVariant = ButtonColorVariant.Orange,
      onClick = noop,
      onMouseEnter = noop,
      onMouseLeave = noop,
      onBlur = noop,
      ...rest
    }: ButtonProps,
    forwardedRef: React.Ref<HTMLElement>
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = React.useCallback<MouseEventHandler>(
      (event) => {
        setIsHovered(true);
        onMouseEnter(event);
      },
      [onMouseEnter]
    );

    const handleMouseLeave = React.useCallback<MouseEventHandler>(
      (event) => {
        setIsHovered(false);
        onMouseLeave(event);
      },
      [onMouseLeave]
    );

    const handleClick = React.useCallback<MouseEventHandler>(
      (event) => {
        if (!disabled) {
          onClick(event);
        }
        return null;
      },
      [onClick, disabled]
    );

    return (
      <Styled.ButtonWrapper
        as={as}
        type={type}
        style={style}
        className={className}
        ref={forwardedRef}
        size={size}
        disabled={disabled}
        active={active}
        styleVariant={styleVariant}
        colorVariant={colorVariant}
        text={text}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onBlur={onBlur}
        {...rest}
      >
        {text && <Styled.ContentText>{text}</Styled.ContentText>}
      </Styled.ButtonWrapper>
    );
  }
);
