import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {animatedOpacity, animatedTop, fadeIn, fadeOut, showHide} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />
      <View style={styles.containerButtons}>
        <Pressable
          onPress={() => fadeIn({duration: 900, toValue: 1})}
          style={styles.button}>
          <Text>FadeIn</Text>
        </Pressable>
        <Pressable
          onPress={() => fadeOut({duration: 500, toValue: 0})}
          style={styles.button}>
          <Text>FadeOut</Text>
        </Pressable>
        <Pressable onPress={() => showHide()} style={styles.button}>
          <Text>Show/Hide</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Move Y Box</Text>
        </Pressable>
      </View>
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
