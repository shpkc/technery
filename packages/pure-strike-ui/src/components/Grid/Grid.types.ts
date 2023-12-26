import {
  ComponentBaseProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";

type GridAutoFlowType = "column" | "row";

interface GridOptions {
  gridTemplateColums: ResponsiveStyleProps;
  gridAutoFlow?: ResponsiveStyleProps<GridAutoFlowType>;
  gridColumnGap?: ResponsiveStyleProps;
  gridRowGap?: number;
  gap?: number;
}

export interface GridProps extends ComponentBaseProps, GridOptions {}
