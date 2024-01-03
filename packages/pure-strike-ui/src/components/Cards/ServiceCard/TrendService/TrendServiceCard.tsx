import React, { forwardRef } from "react";
import * as Styled from "./TrendServiceCard.styled";
import { noop } from "~/utils/funtionUtils";
import { Spacer } from "~/components/Spacer";
import { Text } from "~/components/Text";
import { Flex } from "~/components/Flex";
import { ServiceCardProps } from "../ServiceCard.types";
import { Image } from "~/components/Image";
import { Stack } from "~/components/Stack";
import { Button } from "~/components/Button";
import {
  ButtonSize,
  ButtonStyleVariant,
} from "~/components/Button/Button.types";
import { FaHeart } from "react-icons/fa";
import { Palette } from "~/foundation";

export const TrendServiceCard = forwardRef(
  (
    {
      name,
      summary,
      likeCount,
      thumbnail,
      onClick = noop,
      children,
      ...rest
    }: ServiceCardProps,
    forwardRef
  ) => {
    return (
      <Styled.Wrapper onClick={onClick} {...rest}>
        <Styled.Body>
          <Flex gap={12}>
            <Image
              src={thumbnail}
              width={"56px"}
              height={"56px"}
              borderRadius={"8px"}
            />
            <Stack>
              <Text typo={"Text16Bold"}>{name}</Text>
              <Spacer height={4} />
              <Text color={"gray-700"}>{summary}</Text>
            </Stack>
            <Stack minWidth={"45px"} margin={"0 0 0 auto"}>
              <Button
                styleVariant={ButtonStyleVariant.Like}
                size={ButtonSize.SMALL}
                leftComponent={
                  <FaHeart
                    style={{ marginRight: "6px" }}
                    color={Palette["black-origin"]}
                  />
                }
                rightComponent={
                  <Text typo={"Text14Bold"} color={"black-origin"}>
                    {likeCount}
                  </Text>
                }
              />
            </Stack>
          </Flex>
        </Styled.Body>
      </Styled.Wrapper>
    );
  }
);
