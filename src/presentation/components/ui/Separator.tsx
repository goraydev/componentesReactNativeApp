import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme';

interface Props {
  styles?: StyleProp<ViewStyle>;
}

export const Separator = ({styles}: Props) => {
  return (
    <View style={[{height: 1, backgroundColor: colors.primary}, styles]} />
  );
};
