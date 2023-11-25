import { ComponentBaseProps } from "~/types/componentProps";

interface GridOptions {
  gridTemplateColums: number;
  gridColumnGap?: number;
  gridRowGap?: number;
  gap?: number;
}

export interface GridProps extends ComponentBaseProps, GridOptions {}
