import {Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme';
import {PropsCustomView} from '../../../props/Props';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const CustomView = ({style, children}: PropsCustomView) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        style,
        {backgroundColor: colors.background},
      ]}>
      <View style={[globalStyles.globalMargin]}>{children}</View>
    </View>
  );
};
