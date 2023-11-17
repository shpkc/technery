import React, { forwardRef } from "react";
import * as Styled from "./ToggleContainer.styled";
import { Text } from "~/components/Text";
import { Stack } from "~/components/Stack";
import { Icon } from "~/components/Icon";
import { ArrowDownIcon, ArrowUpIcon } from "adot-icons";
import { IconSize } from "~/components/Icon/Icon.types";
import { ToggleContainerProps } from "./ToggleContainer.types";
import { Flex } from "~/components/Flex";

export const ToggleContinaer = forwardRef(
  (
    { title, children, ...rest }: ToggleContainerProps,
    forwardedRef: React.Ref<HTMLElement>
  ) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const onClickToggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <Styled.ToggleWrapper>
        <Flex
          direction={"row"}
          justify={"space-between"}
          alignment={"center"}
          onClick={onClickToggle}
        >
          <Text typo={"SubText14Regular"}>{title}</Text>
          <Icon
            source={isOpen ? ArrowDownIcon : ArrowUpIcon}
            size={IconSize.Size20}
          />
        </Flex>
        {isOpen && children}
      </Styled.ToggleWrapper>
    );
  }
);
