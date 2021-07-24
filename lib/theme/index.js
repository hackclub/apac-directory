import base_theme from "@hackclub/theme";

const custom_theme = {
  ...base_theme,
};

/**Disable dark mode */
custom_theme.useColorSchemeMediaQuery = false;
custom_theme.colors.modes = {};

export default custom_theme;
