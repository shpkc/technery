import { ComponentBaseProps } from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

interface ServiceCardOptions {
  name: string;
  summary: string;
  thumbnail: string;
  likeCount: number;
  onClick?: MouseEventHandler;
}

export interface ServiceCardProps
  extends ComponentBaseProps,
    ServiceCardOptions {}

export type ServiceCardStyledProps = Pick<ServiceCardProps, "thumbnail">;
