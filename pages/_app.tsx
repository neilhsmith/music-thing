import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "polished";
import { darkTheme as theme } from "../themes";

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

  return getLayout(
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
