import React, { forwardRef } from "react";
import * as Styled from "./RadioGroup.styled";
import { RadioButtonVariant, RadioItemProps } from "./RadioGroup.types";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { RadioOffIcon, RadioOnIcon } from "adot-icons";

export const RadioItem = forwardRef(
  (
    {
      name,
      value,
      checked,
      onClick,
      variant = RadioButtonVariant.Round,
      ...rest
    }: RadioItemProps,
    forwardRef
  ) => {
    const onClickRadioItem = () => {
      onClick(value);
    };
    return (
      <Styled.RadioItemWrapper
        onClick={onClickRadioItem}
        checked={checked}
        variant={variant}
      >
        <Icon
          source={checked ? RadioOnIcon : RadioOffIcon}
          color={checked ? "orange-200" : "gray-400"}
          marginRight={8}
        />
        <Text
          color={checked ? "orange-200" : "gray-400"}
          typo={"MainText16Medium"}
        >
          {value}
        </Text>
      </Styled.RadioItemWrapper>
    );
  }
);
