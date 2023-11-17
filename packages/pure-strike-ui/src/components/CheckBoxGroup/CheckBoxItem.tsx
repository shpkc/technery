import React, { forwardRef } from "react";
import * as Styled from "./CheckBoxGroup.styled";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { CheckBoxOffIcon, CheckBoxOnIcon } from "adot-icons";
import { CheckBoxItemProps } from "./CheckBoxGroup.types";
import { IconSize } from "../Icon/Icon.types";

export const CheckBoxItem = forwardRef(
  (
    {
      name,
      value,
      checked,
      onClick,
      hasBottomBorder,
      ...rest
    }: CheckBoxItemProps,
    forwardRef
  ) => {
    return (
      <Styled.CheckBoxItemWrapper
        onClick={onClick}
        hasBottomBorder={hasBottomBorder}
      >
        <Icon
          source={checked ? CheckBoxOnIcon : CheckBoxOffIcon}
          color={checked ? "orange-200" : "gray-400"}
          marginRight={8}
          size={IconSize.Size24}
        />
        <Text typo={"SubTitle14Medium"}>{name}</Text>
      </Styled.CheckBoxItemWrapper>
    );
  }
);
