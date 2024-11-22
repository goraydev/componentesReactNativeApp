import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PropsMenuItems} from '../../props/Props';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigator/StackNavigator';
import {colors} from '../../config/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {Separator} from './ui/Separator';

export const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: PropsMenuItems) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <>
      <Pressable
        onPress={() => navigation.navigate(component)}
        style={({pressed}) => [pressed && styles.onPress]}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}>
          <View style={styles.info}>
            <Icon name={icon} size={25} color={colors.primary} />
            <Text style={{color: colors.text}}>{name}</Text>
          </View>
          <Icon
            name="chevron-forward-outline"
            size={25}
            style={{marginLeft: 'auto'}}
            color={colors.primary}
          />
        </View>
      </Pressable>
      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  info: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  onPress: {
    opacity: 0.8,
  },
});
