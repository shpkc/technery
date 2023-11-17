import { ColorPaletteProps } from "~/foundation";
import {
  ComponentBaseProps,
  MarginProps,
  SizeProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

export enum IconSize {
  Size16 = 16,
  Size20 = 20,
  Size24 = 24,
  Size32 = 32,
}

interface IconOptions {
  source: React.ElementType<React.SVGProps<SVGSVGElement>>;
  color?: ColorPaletteProps;
  onClick?: MouseEventHandler;
}

export interface IconProps
  extends Omit<ComponentBaseProps, "as">,
    SizeProps<IconSize>,
    MarginProps,
    IconOptions {}

export interface IconStyledProps
  extends Pick<IconOptions, "onClick">,
    SizeProps<IconSize>,
    MarginProps {}
