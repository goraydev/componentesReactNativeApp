import {Text, useColorScheme, View} from 'react-native';
import {Button} from '../../components/ui/Button';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomSwitch} from '../../components/ui/CustomSwitch';

export const ChangeThemeScreen = () => {
  const {colors, currentTheme, setTheme} = useContext(ThemeContext);
  const colorScheme = useColorScheme();

  const [isOn, setisOn] = useState(false);
  const toggleSwitch = () => {
    setisOn(isOn ? false : true);

    if (isOn) {
      setTheme('light');
      return;
    }

    setTheme('dark');
  };

  const changeTheme = () => {
    if (colorScheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <CustomView>
      <Title title={`Dark/light Screen ${currentTheme}`} />
      <View
        style={{
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'center',
        }}>
        <Button
          text="Light"
          onPress={() => setTheme('light')}
          positionText="center"
        />
        <Button
          text="Dark"
          onPress={() => setTheme('dark')}
          positionText="center"
        />
        <Button
          text="Usar el tema del sistema operativo"
          onPress={() => changeTheme()}
          positionText="center"
        />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
          <Text style={{color: colors.text}}>Light/Dark</Text>
          <CustomSwitch isOn={isOn} onValueChange={toggleSwitch} />
        </View>
      </View>
    </CustomView>
  );
};
