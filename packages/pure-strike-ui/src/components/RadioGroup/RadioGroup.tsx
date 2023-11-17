import React, { forwardRef } from "react";
import * as Styled from "./RadioGroup.styled";
import { RadioButtonVariant, RadioGroupProps } from "./RadioGroup.types";
import { RadioItem } from "./RadioItem";
import { useController } from "react-hook-form";

export const RadioGroup = forwardRef(
  (
    {
      name,
      options,
      variant = RadioButtonVariant.Round,
      control,
      ...rest
    }: RadioGroupProps,
    forwardRef
  ) => {
    const {
      field: { value, onChange: onClickButton },
    } = useController({ name, control });
    return (
      <Styled.RadioGroupWrapper {...rest}>
        {options.map((item) => {
          const isChekced = value === item.value;
          return (
            <RadioItem
              key={item.value}
              value={item.value}
              name={item.name}
              checked={isChekced}
              onClick={onClickButton}
              variant={variant}
            />
          );
        })}
      </Styled.RadioGroupWrapper>
    );
  }
);
