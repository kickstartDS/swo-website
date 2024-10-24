import localFont from "next/font/local";

const displayFont = localFont({
  src: [
    {
      path: "../token/fonts/Lexend-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff",
      weight: "700",
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
      path: "../token/fonts/Lexend-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff",
      weight: "700",
      style: "normal",
    },
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
      path: "../token/fonts/Lexend-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff",
      weight: "700",
      style: "normal",
    },
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
      path: "../token/fonts/Lexend-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff",
      weight: "700",
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
      path: "../token/fonts/Lexend-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff",
      weight: "700",
      style: "normal",
    },
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
      path: "../token/fonts/Lexend-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../token/fonts/Lexend-Bold.woff",
      weight: "700",
      style: "normal",
    },
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
