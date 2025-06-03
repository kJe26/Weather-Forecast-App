import { createContext, CSSProperties, useContext } from "react";

export type ThemeType = 'light' | 'dark';
export const themes = ['light', 'dark'];

export const ThemeContext = createContext<ThemeType>('dark');

export type ColorType = 'textColor' | 'backgroundColor' | 'primaryColor';
export const themeColors: Record<ThemeType, Record<ColorType, CSSProperties['color']>> = {
  light: {
    textColor: '#242424',
    backgroundColor: '#fff',
    primaryColor: '#03dac6',
  },
  dark: {
    textColor: '#fff',
    backgroundColor: '#242424',
    primaryColor: '#03dac6',
  },
};

export function useColors() {
  const theme = useContext(ThemeContext);
  return themeColors[theme];
}

export function useColor(key: ColorType) {
  const theme = useContext(ThemeContext);
  return themeColors[theme][key];
}