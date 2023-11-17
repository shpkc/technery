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

export interface MarginProps {
  margin?: string;
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
  leftButton = React.ReactNode,
  rightButton = React.ReactNode,
> {
  leftButton?: leftButton;
  rightButton?: rightButton;
}
