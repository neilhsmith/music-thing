import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "polished";
import { darkTheme as theme } from "../themes";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

fontAwesomeConfig.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    background-color: ${() => theme.colors.bg1};
    color: ${() => theme.colors.text};
    font-family: ${() => theme.fonts.primary};
    font-size: 1.8rem;
    height: 100vh;
    margin: 0;
  }

  *, *::before, &::after {
    box-sizing: border-box;
  }

  #__next {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${() => theme.colors.textActive};
  }
  h1 {
    font-size: 2.6rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  h4 {
    font-size: 2rem;
  }

  p {
    margin-top: 0;
  }
`;

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithSessionAndLayout = AppProps & {
  session: Session;
  Component: NextPageWithLayout;
};

export default function MyApp({
  session,
  Component,
  pageProps,
}: AppPropsWithSessionAndLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {getLayout(
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        )}
      </ThemeProvider>
    </>
  );
}
