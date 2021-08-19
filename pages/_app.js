import { ThemeProvider } from "theme-ui";
import Head from "next/head";
import Meta from "@hackclub/meta";

import "../lib/css/tippy.css";

import theme from "../lib/theme/index";

const Custom_App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta
        as={Head}
        title="Leaderboard"
        keyword="hack club apac leaderboard"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Custom_App;
