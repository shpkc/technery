import styled, { css } from "styled-components";
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from "./Button.types";
import { Text } from "~/components/Text";
import { Palette } from "~/foundation/colors/palette/palette";
import { ButtonStyleVariants } from "~/foundation/button/buttonVariants";

// NOTE: ButtonSize에 따른 버튼의 min-width, height
const BUTTON_SIZE_VALUE = {
  [ButtonSize.SMALL]: { width: "42px", height: "34px" },
  [ButtonSize.MEDIUM]: { width: "131px", height: "44px" },
  [ButtonSize.STANDARD]: { width: "211px", height: "56px" },
  [ButtonSize.MODAL]: { width: "143px", height: "44px" },
};

interface ButtonWrapperProps {
  size: ButtonSize;
  selected?: boolean;
  hover?: boolean;
  styleVariant: ButtonStyleVariant;
  colorVariant: ButtonColorVariant;
}

const getSizeFromButtonSize = ({ size }: { size: ButtonSize }) => {
  return css`
    min-width: ${BUTTON_SIZE_VALUE[size].width};
    height: ${BUTTON_SIZE_VALUE[size].height};
  `;
};

// NOTE : 버튼 스타일에 따라 background color 및 css 속성
const getColorFromStyleVariant = ({
  styleVariant,
}: {
  styleVariant: ButtonStyleVariant;
}) => {
  switch (styleVariant) {
    case ButtonStyleVariant.Primary:
      return ButtonStyleVariants.Primary;
    case ButtonStyleVariant.Secondary:
      return ButtonStyleVariants.Secondary;
  }
};

const getTextStyleFromVariant = ({
  styleVariant,
}: {
  styleVariant: ButtonStyleVariant;
}) => {
  switch (styleVariant) {
    case ButtonStyleVariant.Primary:
      return css`
        color: ${Palette["black-origin"]};
        font-weight: 700;
      `;
    case ButtonStyleVariant.Secondary:
      return css`
        color: ${Palette["orange-200"]};
      `;
  }
};

// NOTE : 기본 버튼 스타일
export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${getColorFromStyleVariant};
  ${getTextStyleFromVariant};
  ${getSizeFromButtonSize};
`;

// NOTE : 기본 내부 텍스트 스타일
export const ContentText = styled(Text)`
  padding: 0 4px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
