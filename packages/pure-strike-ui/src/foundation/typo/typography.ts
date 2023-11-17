import { css } from "styled-components";

const Title48Black = css`
  font-size: 48px;
  font-weight: 900;
  line-height: 1.2;
`;

const Title32Bold = css`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.6;
`;
const Title28Bold = css`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
`;

const Title24Bold = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.1;
`;

const SubTitle14Medium = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

const MainText20Bold = css`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;

const MainText20Medium = css`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;

const MainText16Bold = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

const MainText16Medium = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

const SubText14Bold = css`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
`;

const SubText14Regular = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

const SubText12Bold = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
`;

const SubText12Regular = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.36;
`;

const ModalHeader = css`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const ModalBodyMedium = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const Typography = {
  Title48Black,
  Title32Bold,
  Title28Bold,
  Title24Bold,
  SubTitle14Medium,
  MainText20Bold,
  MainText20Medium,
  MainText16Bold,
  MainText16Medium,
  SubText14Bold,
  SubText14Regular,
  SubText12Bold,
  SubText12Regular,
  ModalHeader,
  ModalBodyMedium,
};

// NOTE : 키값으로 type 생성
export type TypographyProps = keyof typeof Typography;
