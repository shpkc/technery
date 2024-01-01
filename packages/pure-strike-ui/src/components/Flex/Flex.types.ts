import {
  ComponentBaseProps,
  OverflowProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

export type FlexDirectionType = "column" | "row";

export type AxisAlignmentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";

export type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

export type FlexWrapType = "nowrap" | "wrap" | "wrap-reverse";

interface FlexOptions {
  height?: string;
  direction?: ResponsiveStyleProps<FlexDirectionType>;
  alignment?: AxisAlignmentType;
  justify?: JustifyContentType;
  flexWrap?: FlexWrapType;
  gap?: number;
  onClick?: MouseEventHandler;
}

export interface FlexProps
  extends ComponentBaseProps,
    OverflowProps,
    FlexOptions {}
