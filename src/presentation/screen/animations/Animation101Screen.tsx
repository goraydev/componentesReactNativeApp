import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme';
import {useAnimation} from '../../hooks/useAnimation';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const {animatedOpacity, animatedTop, fadeIn, fadeOut, showHide} =
    useAnimation();

  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Animated.View
        style={[
          styles.purpleBox,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />
      <View style={styles.containerButtons}>
        <Button
          text="Fade In"
          onPress={() => fadeIn({duration: 900, toValue: 1})}
          styles={styles.button}></Button>
        <Button
          text="Fade Out"
          onPress={() => fadeOut({duration: 500, toValue: 0})}
          styles={styles.button}></Button>
        <Button
          text="Show/Hide"
          onPress={() => showHide()}
          styles={styles.button}
        />
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
