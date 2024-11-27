import {
  Text,
  View,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props {
  size: number;
  style?: StyleProp<ViewStyle>;
  color: string;
}

export const CustomActivityIndicator = ({size, style, color}: Props) => {
  return (
    <View style={{height: 150, justifyContent: 'center'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
