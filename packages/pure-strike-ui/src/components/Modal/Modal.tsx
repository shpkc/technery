import React, { forwardRef } from "react";
import * as Styled from "./Modal.styled";
import { ModalProps } from "./Modal.types";
import { Text } from "../Text";
import { Icon } from "../Icon";

export const Modal = forwardRef(
  (
    {
      isShow,
      close,
      title,
      content,
      description,
      leftButton,
      rightButton,
      ...rest
    }: ModalProps,
    forwardRef
  ) => {
    // NOTE : 이벤트 버블링 방지
    const preventCloseClick = (e) => {
      e.stopPropagation();
    };

    return (
      <Styled.Background {...rest} isShow={isShow} onClick={close}>
        <Styled.Content onClick={preventCloseClick}>
          <Styled.Header>
            <Text typo={"Text14Bold"}>{title}</Text>
            {/* <Icon source={CloseIcon} onClick={close} /> */}
          </Styled.Header>
          <Styled.Body>
            {content && content}
            {description && (
              <Styled.Description>
                <Text typo={"Text14Bold"} whitespace={"pre"}>
                  {description}
                </Text>
              </Styled.Description>
            )}
          </Styled.Body>
          <Styled.Footer>
            {leftButton && leftButton}
            {rightButton && rightButton}
          </Styled.Footer>
        </Styled.Content>
      </Styled.Background>
    );
  }
);
