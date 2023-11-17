import { keyframes } from "styled-components";

export const ToastPopup = keyframes`
  0% {
      bottom: -40px;
    }
    100% {
      bottom: 40px;
    }
`;

export const ToastFadeOut = keyframes`
   0% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

export const SlideFromRight = keyframes`
  from {
    transform: translateX(260px);
    
  }
  to {
    transform: translateX(0);
  }
`;
