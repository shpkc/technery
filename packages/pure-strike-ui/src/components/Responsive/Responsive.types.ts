import React from "react";
import { ComponentBaseProps } from "~/types/componentProps";

export interface ResponsiveOptions {
  mobileComponent?: React.ReactNode;
  desktopComponent?: React.ReactNode;
}

export interface ResponsiveProps
  extends ComponentBaseProps,
    ResponsiveOptions {}
