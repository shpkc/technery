import {
  ComponentBaseProps,
  MarginProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";

export interface ImageOptions {
  width?: ResponsiveStyleProps;
  height?: ResponsiveStyleProps;
  borderRadius?: ResponsiveStyleProps;
  src: string;
  alt?: string;
  onLoad?: () => void;
}
// NOTE : 이미지 컴포넌트 props
export interface ImageProps
  extends ComponentBaseProps,
    MarginProps,
    ImageOptions {}
