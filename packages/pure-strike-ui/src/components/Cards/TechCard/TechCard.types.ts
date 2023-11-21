import { ComponentBaseProps } from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

interface TechCardOptions {
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  created_at: string;
  onClick?: MouseEventHandler;
}

export interface TechCardProps extends ComponentBaseProps, TechCardOptions {}

export type TechCardStyledProps = Pick<TechCardOptions, "thumbnail">;
