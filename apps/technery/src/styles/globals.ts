import { createGlobalStyle } from "styled-components";
import { inTer } from "./fonts";

export const GlobalStyle = createGlobalStyle`

* {
  font-family: ${inTer.style.fontFamily};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
 
html,
body {
  font-family: Inter, "Noto Sans KR";
  background-color: white;
}

a {
  color: inherit;
  text-decoration: none;
  display: block;
}

input {
  outline: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`;
