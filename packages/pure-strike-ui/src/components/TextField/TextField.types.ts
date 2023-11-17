import { Control } from "react-hook-form";
import { ComponentBaseProps } from "~/types/componentProps";
import { ChangeEventHandler } from "~/types/events";

type TextFieldType = "search" | "text" | "email" | "password";

interface TextFieldOptions {
  name: string;
  type?: TextFieldType;
  label?: string;
  isAllowClear?: boolean;
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler;
  control?: Control<any>;
  isError?: boolean;
  errMessage?: string;
  disabled?: boolean;
}

export interface TextFieldProps extends ComponentBaseProps, TextFieldOptions {}

export type TextFieldStyledProps = Pick<
  TextFieldOptions,
  "isError" | "disabled"
>;
