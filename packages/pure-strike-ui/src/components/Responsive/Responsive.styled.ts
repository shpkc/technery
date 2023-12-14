import styled from "styled-components";
import { MediaQuery } from "~/foundation/responsive/mediaQuery/mediaQuery";

export const Wrapper = styled.div`
  display: block;

  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  @media (min-width: ${MediaQuery.desktop}) {
    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
`;
