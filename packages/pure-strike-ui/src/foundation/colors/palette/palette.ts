import { hexToRgba } from "../utils/alphaUtils";

const OrangePalette = {
  "orange-100": "#FF9933",
  "orange-200": "#FF8000",
  "orange-200-10": hexToRgba("#FF8000", 0.1),
  "orange-300": "#F07C00",
  "orange-200-12": "#FFF0E0",
  "orange-200-28": "#FFDBB8",
  "orange-200-40": "#FFCC99",
};

const RedPalette = {
  "red-100": "#ffcbd1",
  "red-200": "#f69697",
  "red-300": "#ee6b3e",
  "red-400": "#f94449",
  "red-500": "#ff2c2c",
  "red-600": "#f01e2c",
  "red-700": "#de0a26",
  "red-800": "#d1001f",
  "red-900": "#c30010",
};

const GrayPalette = {
  "gray-100": "#F7F7F7",
  "gray-200": "#F5F5F4",
  "gray-300": "#DEDEDE",
  "gray-400": "#C4C4C4",
  "gray-500": "#7E7E7E",
  "gray-600": "#757575",
  "gray-700": "#585858",
  "gray-800": "#78716C",
};

const BluePalette = {
  "blue-700": "#3182f6",
};

const NavyPalette = {
  navy: "#001437",
};

const WhitePlatte = {
  white: "#FFFFFF",
};

const BlackPalette = {
  "black-origin": "#111111",
  "black-origin-50": hexToRgba("#111111", 0.5),
  "black-origin-70": hexToRgba("#111111", 0.7),
  "black-origin-80": hexToRgba("#111111", 0.8),
};

const StatusPalett = {
  "status-success": "#34A853",
  "status-warning": "##F6D64A",
  "status-error": "#EC5339",
  "status-error-10": "#FDEEEB",
};

const TransparentPalett = {
  transparent: "transparent",
};

// NOTE : border 색상 정리가 필요
const BorderColorPalett = {
  "border-gray": "#eeeeee",
};

export const Palette = {
  ...OrangePalette,
  ...RedPalette,
  ...GrayPalette,
  ...NavyPalette,
  ...BluePalette,
  ...WhitePlatte,
  ...BlackPalette,
  ...StatusPalett,
  ...TransparentPalett,
  ...BorderColorPalett,
};

// NOTE : key값만 빼서 type으로 지정
export type ColorPaletteProps = keyof typeof Palette;
