import {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation102Screen = () => {
  const {pan, panResponder} = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
          styles.purpleBox,
        ]}
      />
      <Text>Animation102Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
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
