import React, { forwardRef } from "react";
import * as Styled from "./Responsive.styled";
import { ResponsiveProps } from "./Responsive.types";

// NOTE : 모바일, 태블릿, 데스크탑 반응형 컴포넌트
export const Responsive = forwardRef(
  (
    { mobileComponent, desktopComponent, children, ...rest }: ResponsiveProps,
    forwardRef
  ) => {
    return (
      <Styled.Wrapper {...rest}>
        <div className={"mobile"}>{mobileComponent}</div>
        <div className={"desktop"}>{desktopComponent}</div>
      </Styled.Wrapper>
    );
  }
);
