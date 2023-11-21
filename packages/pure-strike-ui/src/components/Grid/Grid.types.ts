import { ComponentBaseProps } from "~/types/componentProps";

interface GridOptions {
  gap?: number;
}

export interface GridProps extends ComponentBaseProps, GridOptions {}
