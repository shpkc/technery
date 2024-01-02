import React from "react";
import {
  DisableProps,
  ComponentBaseProps,
  SizeProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

type FocusEventHandler = React.FocusEventHandler<HTMLButtonElement>;

export enum ButtonStyleVariant {
  Primary = "primary",
  Secondary = "secondary",
  Outline = "outline",
  Link = "link",
  Icon = "icon",
  Like = "like,",
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
  fullWidth?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  styleVariant?: ButtonStyleVariant;
  borderRadius?: ResponsiveStyleProps;
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
