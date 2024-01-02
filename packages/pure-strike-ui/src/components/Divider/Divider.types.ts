import {
  ComponentBaseProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";
import { ColorPaletteProps } from "~/foundation";

interface DividerOptions {
  width?: ResponsiveStyleProps;
  height?: ResponsiveStyleProps;
  color: ColorPaletteProps;
}

export interface DividerProps extends ComponentBaseProps, DividerOptions {}
