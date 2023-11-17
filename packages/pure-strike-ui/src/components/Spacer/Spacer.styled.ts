import styled from "styled-components";
import { SpacerProps } from "./Spacer.types";

const Spacer = styled.div<SpacerProps>`
  width: ${({ width }) => (width ? width + "px" : "100%")};
  height: ${({ height }) => (height ? height + "px" : "100%")};
`;

export default Spacer;
