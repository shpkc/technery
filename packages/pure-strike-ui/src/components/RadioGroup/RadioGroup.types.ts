import { Control } from "react-hook-form";
import { ComponentBaseProps } from "~/types/componentProps";

export enum RadioButtonVariant {
  Round = "round",
  Rectangle = "rectangle",
}

export interface RadioItemOptions {
  name: string;
  value: string;
}

interface RadioGroupOptions {
  name: string;
  options: RadioItemOptions[];
  defaultValue?: string;
  control?: Control<any>;
  variant: RadioButtonVariant;
}

export interface RadioGroupProps
  extends ComponentBaseProps,
    RadioGroupOptions {}

export interface RadioItemProps extends RadioItemOptions {
  checked: boolean;
  variant: RadioButtonVariant;
  onClick: (value: string) => void;
}

export interface RadioItemStyledProps {
  checked: boolean;
  variant: RadioButtonVariant;
}
