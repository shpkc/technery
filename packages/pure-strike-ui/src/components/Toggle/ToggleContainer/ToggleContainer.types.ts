import { ComponentBaseProps } from "~/types/componentProps";

export interface ToggleContainerOptions {
  title: string;
}

export interface ToggleContainerProps
  extends ComponentBaseProps,
    ToggleContainerOptions {}
