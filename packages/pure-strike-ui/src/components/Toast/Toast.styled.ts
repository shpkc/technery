import styled from "styled-components";
import { ZIndex } from "~/foundation";
import { ToastFadeOut, ToastPopup } from "~/foundation/keyframes/keyframes";

export const ToastWrapper = styled.div`
  position: fixed;
  width: 360px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: rgba(17, 17, 17, 0.85);
  color: white;
  border-radius: 4px;
  left: 50%;
  transform: translate(-50%, 0);
  animation:
    ${ToastPopup} 0.5s ease-in-out,
    ${ToastFadeOut} 3s ease-in-out;
  animation-fill-mode: forwards;
  z-index: ${ZIndex.Toast};
`;
