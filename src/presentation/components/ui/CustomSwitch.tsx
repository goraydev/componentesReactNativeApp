import {Platform, Switch} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme';

interface Props {
  isOn: boolean;
  text?: string;
  onValueChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onValueChange}: Props) => {
  return (
    <View style={styles.switchRow}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}
      <Switch
        thumbColor={Platform.OS == 'android' ? colors.primary : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
