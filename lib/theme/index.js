import base_theme from "@hackclub/theme";
import { darken } from "@theme-ui/color";

const custom_theme = {
  ...base_theme,

  subt: {
    color: "muted",
    my: [0],
  },

  heading: {
    ...base_theme?.heading,
    fontSize: [4, 5],
    my: [0],
  },

  para: {
    ...base_theme?.para,
    fontSize: [1, 2],
  },

  wavy: {
    ...base_theme?.wavy,
    textDecorationLine: "underline",
    textDecorationStyle: "wavy",
  },

  cont: {
    ...base_theme?.cont,
    mt: [4, 5],
  },
};

/**Disable dark mode */
custom_theme.useColorSchemeMediaQuery = false;
custom_theme.colors.modes = {};

custom_theme.styles.root = {
  ...custom_theme.styles.root,
  bg: darken("white", 0.07),
};

export default custom_theme;
