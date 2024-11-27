import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {colors, globalStyles} from '../../../config/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
  nameIcon?: string | undefined;
  colorIcon?: string | undefined;
  sizeIcon?: number | undefined;
  positionText?: 'flex-end' | 'flex-start' | 'center';
}
export const Button = ({
  text,
  styles,
  onPress,
  positionText,
  nameIcon,
  colorIcon,
  sizeIcon,
}: Props) => {

  const {colors} = useContext(ThemeContext);
  return (
    <Pressable
      style={({pressed}) => [
        globalStyles.btnPrimary,
        stylesButton.button,
        styles,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
          flexDirection: 'row',
          gap: 5,
          justifyContent: positionText,
          alignItems: 'center',
        },
      ]}
      onPress={onPress}>
      <Text
        style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
      {nameIcon && (
        <Icon name={`${nameIcon}`} color={colorIcon} size={sizeIcon} />
      )}
    </Pressable>
  );
};

const stylesButton = StyleSheet.create({
  containerButtons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 5,
  },
});
