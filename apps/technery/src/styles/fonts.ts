import { Inter } from "next/font/google";

export const inTer = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  preload: false,
  fallback: [
    "-apple-system",
    "Malgun Gothic",
    "Apple SD Gothic Neo",
    "Roboto",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
});
