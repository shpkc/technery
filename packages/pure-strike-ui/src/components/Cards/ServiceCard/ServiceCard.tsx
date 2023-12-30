import React, { forwardRef } from "react";
import * as Styled from "./ServiceCard.styled";
import { noop } from "~/utils/funtionUtils";
import { Spacer } from "~/components/Spacer";
import { Text } from "~/components/Text";
import { ServiceCardProps } from "./ServiceCard.types";
import { IoIosArrowForward } from "react-icons/io";

export const ServiceCard = forwardRef(
  (
    {
      name,
      summary,
      thumbnail,
      likeCount,
      onClick = noop,
      children,
      ...rest
    }: ServiceCardProps,
    forwardRef
  ) => {
    return (
      <Styled.Wrapper onClick={onClick} {...rest}>
        <Styled.Body>
          <Styled.Thumbnail thumbnail={thumbnail} />
          <Spacer height={12} />
          <Text typo={"Text16Bold"}>{name}</Text>
          <Spacer height={4} />
          <Text
            typo={"Text16Regular"}
            color={"gray-600"}
            ellipsis={true}
            ellipsisLine={3}
          >
            {summary}
          </Text>
        </Styled.Body>
      </Styled.Wrapper>
    );
  }
);
