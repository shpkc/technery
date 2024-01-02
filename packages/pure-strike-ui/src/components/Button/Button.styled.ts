import styled, { css } from "styled-components";
import { ButtonSize, ButtonStyleVariant } from "./Button.types";
import { ButtonStyleVariants } from "~/foundation/button/buttonVariants";
import { getResponsiveStyles } from "~/foundation";

// NOTE: ButtonSize에 따른 버튼의 height 설정, width는 외부 컨테이너로 설정
const BUTTON_SIZE_VALUE = {
  [ButtonSize.SMALL]: { height: "30px" },
  [ButtonSize.MEDIUM]: { height: "44px" },
  [ButtonSize.STANDARD]: { height: "56px" },
  [ButtonSize.MODAL]: { height: "44px" },
};

interface ButtonWrapperProps {
  size: ButtonSize;
  selected?: boolean;
  hover?: boolean;
  fullWidth?: boolean;
  borderRadius?: string | number;
  styleVariant: ButtonStyleVariant;
}

const getSizeFromButtonSize = ({ size }: { size: ButtonSize }) => {
  return css`
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
    case ButtonStyleVariant.Outline:
      return ButtonStyleVariants.Outline;
    case ButtonStyleVariant.Like:
      return ButtonStyleVariants.Like;
  }
};

// NOTE : 기본 버튼 스타일
export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${getColorFromStyleVariant};
  ${getSizeFromButtonSize};
  ${({ borderRadius }) =>
    borderRadius && getResponsiveStyles("border-radius", borderRadius)};
`;

// NOTE : 기본 내부 텍스트 스타일
export const ContentText = styled.p`
  padding: 0 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  text-align: center;
`;
