import {
  ComponentBaseProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";

interface GridOptions {
  gridTemplateColums: ResponsiveStyleProps;
  gridColumnGap?: number;
  gridRowGap?: number;
  gap?: number;
}

export interface GridProps extends ComponentBaseProps, GridOptions {}
