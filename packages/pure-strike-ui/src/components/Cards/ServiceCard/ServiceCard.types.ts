import { ComponentBaseProps } from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

interface ServiceCardOptions {
  name: string;
  description: string;
  thumbnail: string;
  onClick?: MouseEventHandler;
}

export interface ServiceCardProps
  extends ComponentBaseProps,
    ServiceCardOptions {}

export type ServiceCardStyledProps = Pick<ServiceCardProps, "thumbnail">;
