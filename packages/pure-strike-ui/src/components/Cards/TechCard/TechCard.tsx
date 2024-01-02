import React, { forwardRef } from "react";
import * as Styled from "./TechCard.styled";
import { noop } from "~/utils/funtionUtils";
import { TechCardProps } from "./TechCard.types";
import { Spacer } from "~/components/Spacer";
import { Text } from "~/components/Text";
import { Flex } from "~/components/Flex";
import { Stack } from "~/components/Stack";
import { TbClick } from "react-icons/tb";

export const TechCard = forwardRef(
  (
    {
      title,
      description,
      category,
      thumbnail,
      author,
      viewCount,
      post_created_at,
      onClick = noop,
      children,
      ...rest
    }: TechCardProps,
    forwardRef
  ) => {
    return (
      <Styled.CardWrapper onClick={onClick} {...rest}>
        <Styled.CardThumbnail thumbnail={thumbnail} />
        <Spacer height={"20px"} />
        <Spacer height={"4px"} />
        <Stack minHeight={52} maxHeight={52}>
          <Text
            typo={"Text24Bold"}
            cursor={"pointer"}
            ellipsis={true}
            ellipsisLine={2}
          >
            {title}
          </Text>
        </Stack>
        <Spacer height={"8px"} />
        <Text
          typo={"Text16Medium"}
          color={"gray-500"}
          ellipsis={true}
          ellipsisLine={2}
        >
          {description}
        </Text>
        <Spacer height={"8px"} />
        <Flex direction={"row"} justify={"space-between"} alignment={"center"}>
          <Text typo={"Text14Bold"} color={"blue-700"}>
            {author}
          </Text>
          <Flex direction={"row"} alignment={"center"}>
            <Text typo={"Text14Regular"}>{post_created_at}</Text>
            <Spacer width={8} />
            <TbClick size={18} color={"#7E7E7E"} />
            <Spacer width={4} />
            <Text typo={"Text14Regular"} color={"gray-500"}>
              {viewCount}
            </Text>
          </Flex>
        </Flex>
      </Styled.CardWrapper>
    );
  }
);
