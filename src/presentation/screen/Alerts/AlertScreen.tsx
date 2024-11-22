import {Alert, StyleSheet, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import prompt from 'react-native-prompt-android';
import {showPrompt} from '../../../config/adapters/prompt.adapters';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const showPromptNative = () => {
    /* prompt(
      'Correo Electronico',
      'Escriba su correo electrónico',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'email-address',
        cancelable: false,
        defaultValue: '',
        placeholder: 'Ingresa tu correo',
      },
    ); */
    /* 
    Código nativo
    Alert.prompt(
      'Correo electronico',
      'Lorem Ipsum',
      (valor: string) => console.log({valor}),
      'secure-text',
      'Soy el valor por defecto',
      'number-pad',
    ); */
  };

  const showPromptHere = () => {
    showPrompt({
      title: 'Mostrar Prompt',
      subtitle: 'Subtitulo del modal',
      buttons: [
        {
          text: 'Cancelar',
          onPress: () => console.info('cancelar'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => console.info('Ok'),
        },
      ],
      placeHolder: 'Ingrese texto',
      type: 'secure-text',
    });
  };

  return (
    <CustomView>
      <View style={styles.containerButtons}>
        <Title title="Alertas" safe />
        <Button text="Alerta - 2 botones" onPress={createTwoButtonAlert} />
        <Button text="Alerta - 3 botones" onPress={createThreeButtonAlert} />
        <Button text="Alerta Emergente" onPress={showPromptHere} />
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    display: 'flex',
    gap: 5,
  },
});
