import localFont from "next/font/local";

const displayFont = localFont({
  src: [
    {
      path: "../token/fonts/Metropolis-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  preload: true,
  display: "swap",
  variable: "--ks-font-family-display",
  fallback: [
    "Baskerville",
    "'Baskerville Old Face'",
    "'Hoefler Text'",
    "'Times New Roman'",
    "serif",
  ],
  adjustFontFallback: false,
});

const copyFont = localFont({
  src: [
    {
      path: "../token/fonts/Mulish-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-600.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-600.woff", weight: "600", style: "normal" },
    {
      path: "../token/fonts/Mulish-800.woff2",
      weight: "800",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-800.woff", weight: "800", style: "normal" },
    {
      path: "../token/fonts/Mulish-300.woff2",
      weight: "300",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-300.woff", weight: "300", style: "normal" },
  ],
  preload: true,
  display: "swap",
  variable: "--ks-font-family-copy",
  fallback: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

const interfaceFont = localFont({
  src: [
    {
      path: "../token/fonts/Mulish-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-600.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-600.woff", weight: "600", style: "normal" },
    {
      path: "../token/fonts/Mulish-800.woff2",
      weight: "800",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-800.woff", weight: "800", style: "normal" },
    {
      path: "../token/fonts/Mulish-300.woff2",
      weight: "300",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-300.woff", weight: "300", style: "normal" },
  ],
  preload: true,
  display: "optional",
  variable: "--ks-font-family-interface",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Avenir Next",
    "Avenir",
    "Segoe UI",
    "Lucida Grande",
    "Helvetica Neue",
    "Helvetica",
    "Fira Sans",
    "Roboto",
    "Noto",
    "Droid Sans",
    "Cantarell",
    "Oxygen",
    "Ubuntu",
    "Franklin Gothic Medium",
    "Century Gothic",
    "Liberation Sans",
    "sans-serif",
  ],
  adjustFontFallback: false,
});

const displayFontPreview = localFont({
  src: [
    {
      path: "../token/fonts/Metropolis-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../token/fonts/Metropolis-Bold.woff",
      weight: "bold",
      style: "normal",
    },
  ],
  preload: false,
  display: "auto",
  variable: "--ks-font-family-display",
  fallback: [
    "Baskerville",
    "'Baskerville Old Face'",
    "'Hoefler Text'",
    "'Times New Roman'",
    "serif",
  ],
  adjustFontFallback: false,
});

const copyFontPreview = localFont({
  src: [
    {
      path: "../token/fonts/Mulish-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-600.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-600.woff", weight: "600", style: "normal" },
    {
      path: "../token/fonts/Mulish-800.woff2",
      weight: "800",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-800.woff", weight: "800", style: "normal" },
    {
      path: "../token/fonts/Mulish-300.woff2",
      weight: "300",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-300.woff", weight: "300", style: "normal" },
  ],
  preload: false,
  display: "auto",
  variable: "--ks-font-family-copy",
  fallback: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

const interfaceFontPreview = localFont({
  src: [
    {
      path: "../token/fonts/Mulish-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Mulish-600.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-600.woff", weight: "600", style: "normal" },
    {
      path: "../token/fonts/Mulish-800.woff2",
      weight: "800",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-800.woff", weight: "800", style: "normal" },
    {
      path: "../token/fonts/Mulish-300.woff2",
      weight: "300",
      style: "normal",
    },
    { path: "../token/fonts/Mulish-300.woff", weight: "300", style: "normal" },
  ],
  preload: false,
  display: "auto",
  variable: "--ks-font-family-interface",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Avenir Next",
    "Avenir",
    "Segoe UI",
    "Lucida Grande",
    "Helvetica Neue",
    "Helvetica",
    "Fira Sans",
    "Roboto",
    "Noto",
    "Droid Sans",
    "Cantarell",
    "Oxygen",
    "Ubuntu",
    "Franklin Gothic Medium",
    "Century Gothic",
    "Liberation Sans",
    "sans-serif",
  ],
  adjustFontFallback: false,
});

export const fontClassNames = `${displayFont.variable} ${copyFont.variable} ${interfaceFont.variable}`;
export const fontClassNamesPreview = `${displayFontPreview.variable} ${copyFontPreview.variable} ${interfaceFontPreview.variable}`;
