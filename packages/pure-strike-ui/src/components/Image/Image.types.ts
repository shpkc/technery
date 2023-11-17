import { ComponentBaseProps, MarginProps } from "~/types/componentProps";

export interface ImageOptions {
  width?: number;
  height?: number;
  src: string;
  alt?: string;
  onLoad?: () => void;
}
// NOTE : 이미지 컴포넌트 props
export interface ImageProps
  extends ComponentBaseProps,
    MarginProps,
    ImageOptions {}
