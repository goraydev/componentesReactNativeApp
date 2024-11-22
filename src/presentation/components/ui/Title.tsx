import {Text, View} from 'react-native';
import {PropsTitle} from '../../../props/Props';
import {colors, globalStyles} from '../../../config/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Title = ({title, safe = false, white = false}: PropsTitle) => {
  const {top} = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        color: white ? 'white' : colors.text,
        marginBottom: 10,
      }}>
      {title}
    </Text>
  );
};
