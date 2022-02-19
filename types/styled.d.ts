import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      danger: string;
      warning: string;
      bg1: string;
      bg2: string;
      bg3: string;
      bg4: string;
      bg5: string;
      bgActive: string;
      text: string;
      text2: string;
      text3: string;
      textActive: string;
    };

    buttons: {
      bgs: {
        primary: string;
        secondary: string;
        danger: string;
        warning: string;
        transparent: string;
      };
      fgs: {
        primary: string;
        secondary: string;
        danger: string;
        warning: string;
        transparent: string;
      };
    };

    fonts: {
      primary: string;
    };

    weights: {
      light: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      primary: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      accent: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      bold: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    };
  }
}
