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
    //color: "sheet",
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
//custom_theme.useColorSchemeMediaQuery = false;

// making colors of light theme and dark theme the same
custom_theme.colors = {
  ...custom_theme.colors,
  ...custom_theme.colors.modes.dark,
};

custom_theme.styles.root = {
  ...custom_theme.styles.root,
  //bg: darken("white", 0.03),
  //bg: "dark",
};

export default custom_theme;
