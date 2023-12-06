import {
  ComponentBaseProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";

interface SpacerOptions {
  width?: number;
  height?: ResponsiveStyleProps;
}

export interface SpacerProps extends ComponentBaseProps, SpacerOptions {}
