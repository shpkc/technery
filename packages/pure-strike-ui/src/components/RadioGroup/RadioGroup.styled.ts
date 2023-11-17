import styled, { css } from "styled-components";
import { RadioButtonVariant, RadioItemStyledProps } from "./RadioGroup.types";
import { Palette } from "~/foundation";

// NOTE : radio variant에 따라 style 분기
const getRadioStyleFromVariant = ({ variant, checked }) => {
  switch (variant) {
    case RadioButtonVariant.Round:
      return css``;
    case RadioButtonVariant.Rectangle:
      return css`
        border: 1px solid
          ${checked ? Palette["orange-200"] : Palette["gray-400"]};
        padding: 28px 12px;
        border-radius: 4px;
      `;
  }
};

export const RadioGroupWrapper = styled.div``;

export const RadioItemWrapper = styled.div<RadioItemStyledProps>`
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;
  cursor: pointer;
  ${getRadioStyleFromVariant};
`;
