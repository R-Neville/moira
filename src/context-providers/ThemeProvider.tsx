import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import ThemeType from "../themes/ThemeType";
import Colors from "../themes/Colors";
import themes from "../themes";

export interface IThemeProvider {
  name: ThemeType;
  colors: Colors;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<IThemeProvider>({} as IThemeProvider);

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider
      value={{
        name: currentTheme,
        colors: themes[currentTheme].colors,
        setCurrentTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
