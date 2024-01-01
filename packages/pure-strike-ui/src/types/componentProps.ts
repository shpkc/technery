import { CSSProperties } from "styled-components";

// NOTE : 기본적인 style types
export type ComponentBaseProps = {
  as?: React.ElementType;
  id?: string;
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

export interface VariantProps<Variant extends string | number> {
  variant?: Variant;
}

export interface DisableProps {
  disabled?: boolean;
}

export interface SizeProps<Size extends string | number> {
  size?: Size;
}

export interface CursorProps {
  cursor?: "auto" | "inherit" | "default" | "pointer" | "not-allowed";
}

export interface DirectionProps {
  direction?: "row" | "column";
}

export interface HoverProps {
  hover?: boolean;
}

export interface OverflowProps {
  overflow?: "visible" | "hidden" | "scroll" | "auto";
}

export interface MarginProps {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginX?: number;
  marginY?: number;
  marginAll?: number;
}

export interface PaddingProps {
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingX?: number;
  paddingY?: number;
  paddingAll?: number;
}

export interface SideContentProps<
  leftContent = React.ReactNode,
  rightContent = React.ReactNode,
> {
  leftContent?: leftContent;
  rightContent?: rightContent;
}

// NOTE : 배열로 받을시 type에 따라 내려받을수 있도록
// ex : ["row","column"]시 타입 자동완성
export type ResponsiveStyleProps<T = string | number> =
  | T
  | string
  | number
  | Array<T>;
