import {Text, View} from 'react-native';
import {CustomSwitch} from './CustomSwitch';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const SwitchDarkLight = () => {
  const {colors, currentTheme, setTheme} = useContext(ThemeContext);

  const [isOn, setisOn] = useState(false);
  const toggleSwitch = () => {
    setisOn(isOn ? false : true);

    isOn ? setTheme('light') : setTheme('dark');

   /*  if (isOn) {
      setTheme('light');
      return;
    }

    setTheme('dark'); */
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
      <Text style={{color: colors.text}}>Light/Dark</Text>
      <CustomSwitch isOn={isOn} onValueChange={toggleSwitch} />
    </View>
  );
};


