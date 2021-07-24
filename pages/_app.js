import { ThemeProvider } from "theme-ui";
import Meta from "@hackclub/meta";

import theme from "../lib/theme/index";

const Custom_App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta title="APAC Leaderboard" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Custom_App;
