import styled, { css } from "styled-components";
import { TechCardStyledProps } from "./TechCard.types";

export const CardWrapper = styled.div``;

export const CardThumbnail = styled.div<TechCardStyledProps>`
  cursor: pointer;
  width: 100%;
  height: 213px;
  background-size: 100%;
  background-position: center;
  background-image: url(${(props) => props.thumbnail});
  transition: all 0.25s ease-in-out;

  &:hover {
    background-size: 110%;
  }
`;
