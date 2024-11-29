import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {DarkColors, lighColors, ThemeColors} from '../../config/theme';
import {useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

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
  const isDark = currentTheme === 'dark';
  const colors = isDark ? DarkColors : lighColors;
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
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          colors: colors,
          setTheme: setTheme,
          isDark: isDark,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
