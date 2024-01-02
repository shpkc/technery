import React, { forwardRef } from "react";
import * as Styled from "./Button.styled";
import type ButtonProps from "./Button.types";
import { ButtonSize, ButtonStyleVariant } from "./Button.types";
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
      selected = false,
      fullWidth = false,
      leftComponent,
      rightComponent,
      size = ButtonSize.STANDARD,
      styleVariant = ButtonStyleVariant.Primary,
      borderRadius = "4px",
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

    const getLeftComponent = React.useMemo(() => {
      return leftComponent;
    }, [leftComponent]);

    const getRightComponent = React.useMemo(() => {
      return rightComponent;
    }, [rightComponent]);

    return (
      <Styled.ButtonWrapper
        as={as}
        text={text}
        type={type}
        style={style}
        className={className}
        ref={forwardedRef}
        size={size}
        disabled={disabled}
        active={active}
        selected={selected}
        styleVariant={styleVariant}
        borderRadius={borderRadius}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        fullWidth={fullWidth}
        onBlur={onBlur}
        {...rest}
      >
        {leftComponent && getLeftComponent}
        {text && <Styled.ContentText>{text}</Styled.ContentText>}
        {rightComponent && getRightComponent}
      </Styled.ButtonWrapper>
    );
  }
);
