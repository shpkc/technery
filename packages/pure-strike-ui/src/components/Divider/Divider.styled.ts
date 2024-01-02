import styled from "styled-components";
import { DividerProps } from "./Divider.types";
import { Palette, getResponsiveStyles } from "~/foundation";

const Divider = styled.div<DividerProps>`
  ${(props) => getResponsiveStyles("width", props.width)};
  ${(props) => getResponsiveStyles("height", props.height)};
  ${(props) => getResponsiveStyles("background-color", Palette[props.color])};
`;

export default Divider;
