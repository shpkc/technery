import { ComponentBaseProps } from "~/types/componentProps";
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

interface DirectionProps {
  sm: FlexDirectionType;
  lg: FlexDirectionType;
}
export type ResponsiveDirectionType = DirectionProps | FlexDirectionType;

interface FlexOptions {
  height?: string;
  direction?: ResponsiveDirectionType;
  alignment?: AxisAlignmentType;
  justify?: JustifyContentType;
  flexWrap?: FlexWrapType;
  gap?: number;
  onClick?: MouseEventHandler;
}

export interface FlexProps extends ComponentBaseProps, FlexOptions {}
