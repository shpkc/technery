import styled from "styled-components";
import { getResponsiveStyles } from "~/foundation/responsive";
import { SpacerProps } from "./Spacer.types";

const Spacer = styled.div<SpacerProps>`
  width: ${({ width }) => (width ? width + "px" : "100%")};
  ${(props) => getResponsiveStyles("height", props.height)};
`;

export default Spacer;
