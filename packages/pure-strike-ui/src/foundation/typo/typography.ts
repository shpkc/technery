import { css } from "styled-components";

const Text48Black = css`
  font-size: 48px;
  font-weight: 900;
  line-height: 1.2;
`;

const Text32Bold = css`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.6;
`;
const Text28Bold = css`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
`;

const Text24Bold = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.1;
`;

const Text24Medium = css`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
`;

const Text20Bold = css`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;

const Text20Medium = css`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;

const Text20Regular = css`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`;

const Text18Regular = css`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;

const Text16Bold = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

const Text16Medium = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

const Text16Regular = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

const Text14Bold = css`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
`;

const Text14Regular = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

const Text14Medium = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

const Text12Bold = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
`;

const Text12Regular = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.36;
`;

export const Typography = {
  Text48Black,
  Text32Bold,
  Text28Bold,
  Text24Bold,
  Text24Medium,
  Text20Bold,
  Text20Medium,
  Text20Regular,
  Text18Regular,
  Text16Bold,
  Text16Medium,
  Text16Regular,
  Text14Bold,
  Text14Medium,
  Text14Regular,
  Text12Bold,
  Text12Regular,
};

// NOTE : 키값으로 type 생성
export type TypographyProps = keyof typeof Typography;
