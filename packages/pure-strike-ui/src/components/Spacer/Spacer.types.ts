import {
  ComponentBaseProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";

interface SpacerOptions {
  width?: ResponsiveStyleProps;
  height?: ResponsiveStyleProps;
}

export interface SpacerProps extends ComponentBaseProps, SpacerOptions {}
