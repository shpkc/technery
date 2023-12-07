import {
  DisableProps,
  ComponentBaseProps,
  SizeProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

type FocusEventHandler = React.FocusEventHandler<HTMLButtonElement>;

export enum ButtonStyleVariant {
  Primary = "primary",
  Secondary = "secondary",
  Link = "link",
  Icon = "icon",
}

export enum ButtonColorVariant {
  Orange = "orange",
  Gray = "gray",
  White = "white",
}

export enum ButtonSize {
  STANDARD = "STANDARD",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
  MODAL = "MODAL",
}

interface ButtonOptions {
  type?: HTMLButtonElement["type"];
  text?: string;
  loading?: boolean;
  active?: boolean;
  selected?: boolean;
  styleVariant?: ButtonStyleVariant;
  colorVariant?: ButtonColorVariant;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onBlur?: FocusEventHandler;
}

export default interface ButtonProps
  extends ComponentBaseProps,
    SizeProps<ButtonSize>,
    DisableProps,
    ButtonOptions {}
