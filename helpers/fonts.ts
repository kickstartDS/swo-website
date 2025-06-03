import localFont from "next/font/local";

const displayFont = localFont({
  src: [
    {
      path: "../token/fonts/museosans_500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/museosans_700.woff2",
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

const displayFontPreview = localFont({
  src: [
    {
      path: "../token/fonts/museosans_500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../token/fonts/museosans_700.woff2",
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

export const fontClassNames = `${displayFont.variable}`;
export const fontClassNamesPreview = `${displayFontPreview.variable}`;
