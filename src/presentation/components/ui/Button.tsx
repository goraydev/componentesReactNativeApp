import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {colors, globalStyles} from '../../../config/theme';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}
export const Button = ({text, styles, onPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        globalStyles.btnPrimary,
        stylesButton.button,
        styles,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
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
