import styled from "styled-components";
import { ZIndex } from "~/foundation";
import { ModalProps } from "./Modal.types";

export const Background = styled.div<ModalProps>`
  display: ${({ isShow }) => (isShow ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.5);
  z-index: ${ZIndex.Modal};
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 342px;
  background-color: white;
  border-radius: 8px;
`;

export const Header = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  padding: 24px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  gap: 8px;
`;

export const Description = styled.div`
  padding: 24px;
`;
