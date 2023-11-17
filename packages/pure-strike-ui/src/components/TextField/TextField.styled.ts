import styled, { css } from "styled-components";
import { TextFieldStyledProps } from "./TextField.types";

// NOTE : field error 공통 스타일
export const erroredWrapperBorderStyle = css`
  border: 1px solid #ec5339;
  & > span {
    color: #ec5339;
  }
`;

// NOTE : field disabled 공통 스타일
export const disabledWrapperBorderStyle = css`
  border: 1px solid #c4c4c4;
  color: #c4c4c4;
  & > span {
    color: #c4c4c4;
  }
`;

export const Wrapper = styled.div<TextFieldStyledProps>`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #7e7e7e;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
  ${({ isError }) => isError && erroredWrapperBorderStyle}

  ${({ isError }) => isError && erroredWrapperBorderStyle}
`;

export const Container = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Label = styled.span`
  position: absolute;
  left: 8px;
  top: -6px;
  padding: 0 4px;
  background-color: white;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  &::placeholder {
    font-weight: 500;
    color: #c4c4c4;
  }
`;
