import React, { forwardRef } from "react";
import * as Styled from "./LevelTestCard.styled";
import { noop } from "~/utils/funtionUtils";
import { LevelTestCardProps, LevelTestStatus } from "./LevelTestCard.types";
import { Text } from "~/components/Text";
import { Flex } from "~/components/Flex";
import { Icon } from "~/components/Icon";
import { ArrowDownIcon } from "adot-icons";
import { IconSize } from "~/components/Icon/Icon.types";

export const LevelTestCard = forwardRef(
  (
    {
      title,
      description,
      status = LevelTestStatus.OnGoing,
      statusText,
      onClick = noop,
      children,
      ...rest
    }: LevelTestCardProps,
    forwardRef
  ) => {
    // NOTE : 일단 status 2개로 구분(onGoing, finished)
    const isOngoing = React.useMemo<boolean>(() => {
      return status === LevelTestStatus.OnGoing;
    }, [status]);

    return (
      <Styled.CardWrapper onClick={onClick} status={status} {...rest}>
        <Styled.CardHeader status={status}>
          <Flex>
            <Text typo={"MainText16Medium"}>{title}</Text>
          </Flex>
          <Flex direction={"row"} justify={"flex-end"}>
            <Text typo={"MainText16Medium"}>{statusText}</Text>
            <Icon
              source={ArrowDownIcon}
              size={IconSize.Size24}
              color={isOngoing ? "black-origin" : "orange-200"}
              style={{ transform: "rotate(270deg)" }}
            />
          </Flex>
        </Styled.CardHeader>
        <Text typo={"SubText12Regular"} color={"orange-200"}>
          {description}
        </Text>
      </Styled.CardWrapper>
    );
  }
);
