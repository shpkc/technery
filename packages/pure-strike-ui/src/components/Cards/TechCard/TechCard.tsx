import React, { forwardRef } from "react";
import * as Styled from "./TechCard.styled";
import { noop } from "~/utils/funtionUtils";
import { TechCardProps } from "./TechCard.types";
import { Spacer } from "~/components/Spacer";
import { Text } from "~/components/Text";

export const TechCard = forwardRef(
  (
    {
      title,
      description,
      category,
      thumbnail,
      onClick = noop,
      children,
      ...rest
    }: TechCardProps,
    forwardRef
  ) => {
    return (
      <Styled.CardWrapper onClick={onClick} {...rest}>
        <Styled.CardThumbnail thumbnail={thumbnail} />
        <Spacer height={20} />
        <Text typo={"SubTitle14Medium"} color={"gray-600"}>
          #Front
        </Text>
        <Spacer height={4} />
        <Text typo={"Title24Bold"} cursor={"pointer"}>
          Next.js App Router로 제품 만들기
        </Text>
        <Spacer height={8} />
        <Text>이제 더 이상 Axios를 쓰지 않기로 했습니다</Text>
      </Styled.CardWrapper>
    );
  }
);
