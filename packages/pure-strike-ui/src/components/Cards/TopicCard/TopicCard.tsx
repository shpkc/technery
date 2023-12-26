import React, { forwardRef } from "react";
import * as Styled from "./TopicCard.styled";
import { noop } from "~/utils/funtionUtils";
import { Spacer } from "~/components/Spacer";
import { Text } from "~/components/Text";
import { Flex } from "~/components/Flex";
import { TopicCardProps } from "./TopicCard.types";
import { IoIosArrowForward } from "react-icons/io";

export const TopicCard = forwardRef(
  (
    {
      title,
      bgColor,
      emoji,
      onClick = noop,
      children,
      ...rest
    }: TopicCardProps,
    forwardRef
  ) => {
    return (
      <Styled.Wrapper onClick={onClick} {...rest}>
        <Styled.Body>
          <Styled.Container>
            <Flex direction={"row"} alignment={"center"}>
              <Styled.EmojiWrapper bgColor={bgColor}>
                {emoji}
              </Styled.EmojiWrapper>
              <Spacer width={20} />
              <Text typo={"Text16Regular"} whitespace={"nowrap"}>
                {title}
              </Text>
              <Styled.ArrowWrapper>
                <IoIosArrowForward color={"gray"} size={20} />
              </Styled.ArrowWrapper>
            </Flex>
          </Styled.Container>
        </Styled.Body>
      </Styled.Wrapper>
    );
  }
);
