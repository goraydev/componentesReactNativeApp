import {Text, View} from 'react-native';
import {colors} from '../../../config/theme';

interface Props {
  message: string;
  type: string;
}

export const Message = ({message, type}: Props) => {
  return (
    <View
      style={{
        backgroundColor: type === 'error' ? '#C70039' : '#1787e3',
        padding: 10,
        borderRadius: 5,
      }}>
      <Text style={{color: 'white'}}>{message}</Text>
    </View>
  );
};
