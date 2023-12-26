import styled from "styled-components";
import { Palette } from "~/foundation";
import { ServiceCardStyledProps } from "./ServiceCard.types";

export const Wrapper = styled.div``;

export const Body = styled.div``;

export const Thumbnail = styled.div<ServiceCardStyledProps>`
  cursor: pointer;
  width: 100%;
  height: 220px;
  border-radius: 8px;
  background-size: 100%;
  background-position: center;
  background-image: url(${(props) => props.thumbnail});
  transition: all 0.25s ease-in-out;
  &:hover {
    background-size: 110%;
  }
  border: 1px solid ${Palette["gray-200"]};
`;

export const Container = styled.div`
  position: relative;
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid ${Palette["gray-300"]};
`;
