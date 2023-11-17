import { ComponentBaseProps } from "~/types/componentProps";

interface SpacerOptions {
  width?: number;
  height?: number;
}

export interface SpacerProps extends ComponentBaseProps, SpacerOptions {}
