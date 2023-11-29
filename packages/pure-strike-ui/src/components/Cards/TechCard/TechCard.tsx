import React, { forwardRef } from "react";
import * as Styled from "./TechCard.styled";
import { noop } from "~/utils/funtionUtils";
import { TechCardProps } from "./TechCard.types";
import { Spacer } from "~/components/Spacer";
import { Text } from "~/components/Text";
import { Flex } from "~/components/Flex";

export const TechCard = forwardRef(
  (
    {
      title,
      description,
      category,
      thumbnail,
      author,
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
          # {category}
        </Text>
        <Spacer height={4} />
        <Text
          typo={"Title24Bold"}
          cursor={"pointer"}
          ellipsis={true}
          ellipsisLine={2}
        >
          {title}
        </Text>
        <Spacer height={8} />
        <Text
          typo={"MainText16Medium"}
          color={"gray-500"}
          ellipsis={true}
          ellipsisLine={2}
        >
          {description}
        </Text>
        <Spacer height={8} />
        <Text typo={"SubTitle14Medium"}>{author}</Text>
      </Styled.CardWrapper>
    );
  }
);
