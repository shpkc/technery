import { ComponentBaseProps } from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

interface ToastOptions {
  message: string;
  withErrorIcon?: boolean;
  onClick?: MouseEventHandler;
}

export interface ToastProps extends ComponentBaseProps, ToastOptions {}
