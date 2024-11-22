import {Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme';
import {PropsCustomView} from '../../../props/Props';

export const CustomView = ({style, children}: PropsCustomView) => {
  return (
    <View style={[globalStyles.mainContainer, style]}>
      <View style={[globalStyles.globalMargin]}>{children}</View>
    </View>
  );
};
