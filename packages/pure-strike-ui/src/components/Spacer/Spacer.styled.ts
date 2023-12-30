import styled from "styled-components";
import { getResponsiveStyles } from "~/foundation/responsive";
import { SpacerProps } from "./Spacer.types";

const Spacer = styled.div<SpacerProps>`
  ${(props) => getResponsiveStyles("width", props.width)};
  ${(props) => getResponsiveStyles("height", props.height)};
`;

export default Spacer;
