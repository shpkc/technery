import styled, { css } from "styled-components";
import { LevelTestStatus, LevelTestStyledProps } from "./LevelTestCard.types";
import { Palette } from "~/foundation";

// NOTE : status로 wrapper, header style 분기
const getCardStyleFromStatus = (status: LevelTestStatus) => {
  switch (status) {
    case LevelTestStatus.OnGoing:
      return {
        wrapperStyle: css`
          background-color: ${Palette.white};
        `,
        headerStyle: css`
          color: black;
          border-bottom: 1px solid ${Palette["gray-300"]};
        `,
      };
    case LevelTestStatus.Finished:
      return {
        wrapperStyle: css`
          background-color: ${Palette["orange-200-12"]};
        `,
        headerStyle: css`
          color: ${Palette["orange-200"]};
          border-bottom: 1px solid ${Palette["orange-200"]};
        `,
      };
  }
};

export const CardWrapper = styled.div<LevelTestStyledProps>`
  padding: 16px 20px;
  border: 1px solid #ff8000;
  border-radius: 8px;
  ${({ status }) => getCardStyleFromStatus(status).wrapperStyle};
`;

export const CardHeader = styled.div<LevelTestStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 12px 0;
  margin: 0 0 12px 0;
  ${({ status }) => getCardStyleFromStatus(status).headerStyle}
`;
