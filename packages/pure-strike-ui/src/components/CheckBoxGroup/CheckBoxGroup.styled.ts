import styled, { css } from "styled-components";
import { CheckBoxStyledProps } from "./CheckBoxGroup.types";
import { Palette } from "~/foundation";

const bottomBorderStyle = css`
  border-bottom: 1px solid ${Palette["gray-400"]};
`;

export const CheckBoxGroupWrapper = styled.div``;

export const CheckBoxItemWrapper = styled.div<CheckBoxStyledProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 0;
  margin: 0 0 8px 0;
  ${({ hasBottomBorder }) => hasBottomBorder && bottomBorderStyle}
`;
