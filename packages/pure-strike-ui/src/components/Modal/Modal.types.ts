import React from "react";
import { ComponentBaseProps } from "~/types/componentProps";

interface ModalOptions {
  isShow: boolean;
  close: () => void;
  title: string;
  content?: React.ReactNode;
  description?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
}

export interface ModalProps extends ComponentBaseProps, ModalOptions {}
