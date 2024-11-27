import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {DarkColors, lighColors, ThemeColors} from '../../config/theme';
import {useColorScheme} from 'react-native';

export type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark?: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  /* useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
      return;
    }

    setCurrentTheme('light');
  }, [colorScheme]); */

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        colors: currentTheme === 'light' ? lighColors : DarkColors,
        setTheme: setTheme,
        isDark: currentTheme !== 'light',
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
