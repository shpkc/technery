import styled from "styled-components";
import { Palette } from "~/foundation";
import { ServiceCardStyledProps } from "../ServiceCard.types";

export const Wrapper = styled.div``;

export const Body = styled.div`
  width: 100%;
  border: 1px solid ${Palette["gray-300"]};
  border-radius: 8px;
  padding: 12px;
  min-height: 100px;
`;

export const Thumbnail = styled.div<ServiceCardStyledProps>``;

export const Container = styled.div`
  position: relative;
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid ${Palette["gray-300"]};
`;
