import {Text, View} from 'react-native';
import {PropsTitle} from '../../../props/Props';
import {colors, globalStyles} from '../../../config/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';
import {useContext} from 'react';

export const Title = ({title, safe = false, white = false}: PropsTitle) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        color: colors.text,
        marginBottom: 10,
      }}>
      {title}
    </Text>
  );
};
