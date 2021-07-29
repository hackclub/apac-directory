import { ThemeProvider } from "theme-ui";
import Meta from "@hackclub/meta";

import "../lib/css/tippy.css";

import theme from "../lib/theme/index";

const Custom_App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Custom_App;
