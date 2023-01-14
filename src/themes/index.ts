import ThemeType from "./ThemeType";
import Theme from "./Theme";
import dark from "./dark";
import light from "./light";

const themes = {
  light,
  dark,
} as Record<ThemeType, Theme>;

export default themes;
