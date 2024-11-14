import localFont from "next/font/local";

const displayFont = localFont({
  src: [
    {
      path: "../token/fonts/Vollkorn-Regular.woff",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Regular.woff2",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff2",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff",
      weight: "700",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff2",
      weight: "700",
    },
  ],
  preload: true,
  display: "swap",
  variable: "--ks-font-family-display",
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

const copyFont = localFont({
  src: [
    {
      path: "../token/fonts/Vollkorn-Regular.woff",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Regular.woff2",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff2",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff",
      weight: "700",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff2",
      weight: "700",
    },
  ],
  preload: true,
  display: "swap",
  variable: "--ks-font-family-copy",
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

const interfaceFont = localFont({
  src: [
    {
      path: "../token/fonts/Vollkorn-Regular.woff",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Regular.woff2",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff2",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff",
      weight: "700",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff2",
      weight: "700",
    },
  ],
  preload: true,
  display: "swap",
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
      path: "../token/fonts/Vollkorn-SemiBold.woff2",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff",
      weight: "600",
    },
  ],
  preload: false,
  display: "auto",
  variable: "--ks-font-family-display",
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

const copyFontPreview = localFont({
  src: [
    {
      path: "../token/fonts/Vollkorn-Regular.woff",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Regular.woff2",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff2",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff",
      weight: "700",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff2",
      weight: "700",
    },
  ],
  preload: false,
  display: "auto",
  variable: "--ks-font-family-copy",
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

const interfaceFontPreview = localFont({
  src: [
    {
      path: "../token/fonts/Vollkorn-Regular.woff",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Regular.woff2",
      weight: "400",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-Medium.woff2",
      weight: "500",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff",
      weight: "700",
    },
    {
      path: "../token/fonts/Vollkorn-Bold.woff2",
      weight: "700",
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
