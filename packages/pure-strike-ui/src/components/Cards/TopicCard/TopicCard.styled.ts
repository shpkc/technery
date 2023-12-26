import styled from "styled-components";
import { Palette } from "~/foundation";
import { TopicCardStyleProps } from "./TopicCard.types";

export const Wrapper = styled.div``;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: 4px;
  visibility: hidden;
`;

export const Body = styled.div`
  &:hover {
    background-color: ${Palette["gray-200"]};
    border-radius: 4px;
    transition: 0.1s ease-in-out;
    ${ArrowWrapper} {
      visibility: visible;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid ${Palette["gray-300"]};
`;

export const EmojiWrapper = styled.div<TopicCardStyleProps>`
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${(props) => props.bgColor};
`;
