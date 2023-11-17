import React, { forwardRef } from "react";
import * as Styled from "./CheckBoxGroup.styled";
import { useController } from "react-hook-form";
import { CheckBoxGroupProps } from "./CheckBoxGroup.types";
import { CheckBoxItem } from "./CheckBoxItem";

export const CheckBoxGroup = forwardRef(
  ({ name, options, control, ...rest }: CheckBoxGroupProps, forwardRef) => {
    const {
      field: { value: formValue, onChange },
    } = useController({ name, control });

    const onClickAll = React.useCallback(() => {
      const allOptionsList = options.map((item) => item.value);
      if (formValue.length === allOptionsList.length) {
        onChange([]);
        return;
      }
      return onChange(allOptionsList);
    }, [formValue]);

    const onClickCheckBox = React.useCallback(
      (value: string) => {
        if (formValue.includes(value)) {
          return onChange(formValue.filter((item) => item !== value));
        }
        return onChange([...formValue, value]);
      },
      [formValue]
    );

    const isChecked = React.useCallback(
      (value: string) => {
        return formValue.includes(value);
      },
      [formValue]
    );
    return (
      <Styled.CheckBoxGroupWrapper {...rest}>
        {options.map((item) => {
          const { value, name, isCheckAll, hasBottomBorder } = item;
          return (
            <CheckBoxItem
              key={value}
              value={value}
              name={name}
              checked={isChecked(value)}
              onClick={isCheckAll ? onClickAll : () => onClickCheckBox(value)}
              hasBottomBorder={hasBottomBorder}
            />
          );
        })}
      </Styled.CheckBoxGroupWrapper>
    );
  }
);
