import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#46D9AD",
    danger: "#DC3545",
    warning: "#EB9C53",
    bg1: "#12181B",
    bg2: "#141B1E",
    bg3: "#191F22",
    bg4: "#252B2E",
    bg5: "#E5E5E5",
    bgActive: "#374348",
    text: "#C4C4C4",
    text2: "#141B1E",
    text3: "#F6F6F6",
    textActive: "#FFFFFF",
  },
  buttons: {
    bgs: {
      primary: "#46D9AD",
      secondary: "#E5E5E5",
      danger: "#DC3545",
      warning: "#EB9C53",
      transparent: "transparent",
    },
    fgs: {
      primary: "#FFFFFF",
      secondary: "#141B1E",
      danger: "#FFFFFF",
      warning: "#FFFFFF",
      transparent: "#FFFFFF",
    },
  },
  fonts: {
    primary: "'Poppins', sans-serif",
  },
  weights: {
    light: 300,
    primary: 300,
    accent: 500,
    bold: 700,
  },
};
