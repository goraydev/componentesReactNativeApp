import './gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {StackNavigator} from './navigator/StackNavigator';
import {ThemeContext, ThemeProvider} from './presentation/context/ThemeContext';
import {PropsWithChildren, useContext} from 'react';
import {colors} from './config/theme';

const AppNavigation = ({children}: PropsWithChildren) => {
  const {isDark} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <AppTheme>
      <StackNavigator />
    </AppTheme>
  );
};

export default App;
