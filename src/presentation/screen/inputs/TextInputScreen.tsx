import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme';
import {useEffect, useState} from 'react';
import {Button} from '../../components/ui/Button';
import {Message} from '../../components/ui/Message';

interface PropsMessage {
  message: string;
  type: 'error' | 'success' | '';
}

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
  });

  const [info, setMessage] = useState<PropsMessage>({
    message: '',
    type: '',
  });

  const isAdult = () => {
    const age = +form.age;

    if (age > 18) {
      setMessage({message: `${form.name} Es mayor de edad`, type: 'success'});
      return;
    }

    setMessage({message: `${form.name} Es menor de edad`, type: 'error'});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView>
          <Title title="Text Inputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Ingrese su correo"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Su edad"
              autoCorrect={false}
              keyboardType="number-pad"
              onChangeText={value => setForm({...form, age: value})}
            />

            <Button text="Calcular" onPress={isAdult} />
          </Card>
          <View style={{height: 10}} />

          {info.message && (
            <Card>
              <Message message={info.message} type={info.type} />
            </Card>
          )}
          <View style={{height: 10}} />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <TextInput
              keyboardType="phone-pad"
              placeholder="Su telefono"
              style={globalStyles.input}
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
          <View style={{height: 10}} />
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
