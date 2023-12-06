import React, { forwardRef } from "react";
import * as Styled from "./TechCard.styled";
import { noop } from "~/utils/funtionUtils";
import { TechCardProps } from "./TechCard.types";
import { Spacer } from "~/components/Spacer";
import { Text } from "~/components/Text";
import { Flex } from "~/components/Flex";
import { Stack } from "~/components/Stack";

export const TechCard = forwardRef(
  (
    {
      title,
      description,
      category,
      thumbnail,
      author,
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
        <Text typo={"SubTitle14Medium"} color={"gray-600"}>
          # {category}
        </Text>
        <Spacer height={"4px"} />
        <Stack minHeight={52} maxHeight={52}>
          <Text
            typo={"Title24Bold"}
            cursor={"pointer"}
            ellipsis={true}
            ellipsisLine={2}
          >
            {title}
          </Text>
        </Stack>
        <Spacer height={"8px"} />
        <Text
          typo={"MainText16Medium"}
          color={"gray-500"}
          ellipsis={true}
          ellipsisLine={2}
        >
          {description}
        </Text>
        <Spacer height={"8px"} />
        <Flex direction={"row"} justify={"space-between"} alignment={"center"}>
          <Flex direction={"row"} alignment={"center"}>
            <Text typo={"SubText14Bold"} color={"blue-700"}>
              {author}
            </Text>
          </Flex>
          <Text typo={"SubText14Regular"}>{post_created_at}</Text>
        </Flex>
      </Styled.CardWrapper>
    );
  }
);
