import {StyleProp, Text, TextStyle, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../../config/theme';

interface Props {
  text: string;
  safe?: boolean;
  style?: StyleProp<TextStyle>;
}

export const Subtitle = ({text, safe, style}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <Text
      style={[
        {...globalStyles.subTitle, marginTop: safe ? top : 0, marginBottom: 10},
        style,
      ]}>
      {text}
    </Text>
  );
};
