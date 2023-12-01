import { ColorPaletteProps, ZIndex } from "~/foundation";
import {
  ComponentBaseProps,
  MarginProps,
  PaddingProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

type PositionType = "static" | "aboslute" | "fixed" | "relative" | "sticky";

interface StackOptions {
  position?: PositionType;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  backgroundColor?: ColorPaletteProps;
  zIndex?: ZIndex;
  borderRadius?: number;
  onClick?: MouseEventHandler;
}

export interface PositionLocationProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface BorderProps {
  borderWidth?: number;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderColor?: ColorPaletteProps;
}

export interface StackProps
  extends ComponentBaseProps,
    PositionLocationProps,
    MarginProps,
    PaddingProps,
    BorderProps,
    StackOptions {}
