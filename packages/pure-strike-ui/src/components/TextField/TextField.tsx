import React, { forwardRef } from "react";
import * as Styled from "./TextField.styled";
import { TextFieldProps } from "./TextField.types";
import { Text } from "../Text/Text";
import { Icon } from "../Icon";
import { IconSize } from "../Icon/Icon.types";
import { useController } from "react-hook-form";

export const TextField = forwardRef(
  (
    {
      name,
      type = "text",
      label,
      isAllowClear = false,
      placeholder,
      control,
      isError,
      errMessage,
      disabled,
      ...rest
    }: TextFieldProps,
    forwardRef
  ) => {
    const {
      field: { value, onChange },
    } = useController({ name, control });
    const ref = React.useRef<any>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const handleFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
      },
      []
    );
    const handleBlur = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
      },
      []
    );

    // NOTE : focus 상태면 plaholder 공백
    const placeholderValue = React.useMemo<string>(() => {
      if (isFocused) {
        return "";
      }
      return placeholder;
    }, [isFocused]);

    // NOTE : focus 상태이거나 input value값이 0 이상일때 라벨 노출
    const isShowLabel = React.useMemo<boolean>(() => {
      if (isFocused || value.length !== 0) {
        return true;
      }
      return false;
    }, [isFocused]);

    const isValueAvaiable = React.useMemo<boolean>(() => {
      return value.length !== 0;
    }, [value]);

    // NOTE : control value 초기화, 내부 포커스는 유지
    const onClickReset = React.useCallback(() => {
      onChange("");
      ref.current?.focus();
    }, [value, ref]);

    const ClearComponent = React.useMemo<React.ReactNode>(() => {
      if (isValueAvaiable) {
        return (
          <div></div>
          // <Icon
          //   source={CloseIcon}
          //   size={IconSize.Size20}
          //   onClick={onClickReset}
          // />
        );
      }
    }, [isValueAvaiable]);

    return (
      <Styled.Wrapper isError={isError} disabled={disabled}>
        {isShowLabel && (
          <Styled.Label>
            <Text typo={"Text14Bold"}>{label}</Text>
          </Styled.Label>
        )}
        <Styled.Container>
          <Styled.Input
            ref={ref}
            type={type}
            placeholder={placeholderValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChange={onChange}
          />
          {isAllowClear && ClearComponent}
        </Styled.Container>
      </Styled.Wrapper>
    );
  }
);
