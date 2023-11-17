import { ComponentBaseProps } from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

interface GridOptions {
  title: string;
}

export interface GridProps extends ComponentBaseProps, GridOptions {}
