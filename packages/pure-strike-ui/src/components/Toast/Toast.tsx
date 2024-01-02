import React, { forwardRef } from "react";
import * as Styled from "./Toast.styled";
import { MouseEventHandler } from "~/types/events";
import { noop } from "~/utils/funtionUtils";
import { ToastProps } from "./Toast.types";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { IconSize } from "../Icon/Icon.types";

export const Toast = forwardRef(
  (
    { message = "", withErrorIcon = false, onClick = noop }: ToastProps,
    forwardRef
  ) => {
    const handleClick = React.useCallback<MouseEventHandler>(
      (event) => {
        onClick(event);
      },
      [onClick]
    );
    return (
      <Styled.ToastWrapper>
        {/* {withErrorIcon && (
          <Icon source={ErrorIcon} size={IconSize.Size16} marginRight={10} />
        )} */}
        <Text typo={"Text14Bold"} color={"white"}>
          {message}
        </Text>
      </Styled.ToastWrapper>
    );
  }
);
