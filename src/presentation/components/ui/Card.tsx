import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme';
import {PropsWithChildren, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}
export const Card = ({style, children}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
          marginVertical: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
