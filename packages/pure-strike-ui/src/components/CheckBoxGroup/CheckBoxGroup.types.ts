import { Control } from "react-hook-form";
import { ComponentBaseProps } from "~/types/componentProps";

export interface CheckBoxItemOptions {
  name: string;
  value: string;
  hasLink?: boolean;
  linkUrl?: string;
  isCheckAll?: boolean;
  hasBottomBorder?: boolean;
}

interface CheckBoxGroupOptions {
  name: string;
  options: CheckBoxItemOptions[];
  control?: Control<any>;
}

export interface CheckBoxGroupProps
  extends ComponentBaseProps,
    CheckBoxGroupOptions {}

export interface CheckBoxItemProps extends CheckBoxItemOptions {
  checked: boolean;
  onClick: () => void;
}

export type CheckBoxStyledProps = Pick<CheckBoxItemOptions, "hasBottomBorder">;
