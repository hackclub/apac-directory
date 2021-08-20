import { ThemeProvider } from "theme-ui";
import "../lib/css/tippy.css";

import theme from "../lib/theme/index";

const Custom_App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Custom_App;
