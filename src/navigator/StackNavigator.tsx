import {HomeScreen} from '../presentation/screen/home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {SwitchScreen} from '../presentation/screen/switches/SwitchScreen';
import {Animation101Screen} from '../presentation/screen/animations/Animation101Screen';
import {Animation102Screen} from '../presentation/screen/animations/Animation102Screen';
import {AlertScreen} from '../presentation/screen/Alerts/AlertScreen';
import {TextInputScreen} from '../presentation/screen/inputs/TextInputScreen';
import {PullToRefreshScreen} from '../presentation/ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../presentation/ui/CustomSectionListScreen';
import {ModalScreen} from '../presentation/screen/Modal/ModalScreen';
import {InfiniteScrollScreen} from '../presentation/ui/InfiniteScrollScreen';
import {SlidesScreen} from '../presentation/screen/Slides/SlidesScreen';
import {ChangeThemeScreen} from '../presentation/screen/theme/ChangeThemeScreen';
import {useContext} from 'react';
import {ThemeContext} from '../presentation/context/ThemeContext';

export type RootStackParams = {
  home: undefined;
  switches: undefined;
  inputs: undefined;
  Animation101Screen: undefined;
};

export const StackNavigator = () => {
  const Stack = createStackNavigator();
  const {colors} = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: colors.background},
        headerTintColor: colors.text,
        headerMode: 'float',
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="switches" component={SwitchScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
};
