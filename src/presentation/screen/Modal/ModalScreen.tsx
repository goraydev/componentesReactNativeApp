import {Modal, Platform, StyleSheet, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const ModalScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const onPress = () => {
    setShowModal(showModal ? false : true);
  };

  return (
    <CustomView>
      <Title title="Modal" safe />
      <Button text="Abrir Modal" onPress={onPress} />
      <Modal visible={showModal} animationType="fade" transparent={true}>
        {/* Mostrar de manera 1 */}
        <View style={{...styles.centeredView}}>
          <View
            style={{
              ...styles.modalView,
              backgroundColor: colors.background,
              shadowColor: colors.primary,
            }}>
            <Title title="Modal Content" safe />
            <Text style={{color: colors.text}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis eveniet maxime ad voluptates eligendi delectus
              doloremque eos fugit, nobis voluptas, impedit, tempora animi quia
              ratione blanditiis facere praesentium voluptatibus cumque?
            </Text>
            <Button
              text="Cerrar Modal"
              onPress={onPress}
              styles={{
                height: Platform.OS === 'android' ? 40 : 60,
                marginTop: 10,
              }}
            />
          </View>
        </View>

        {/*   <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button
              text="Cerrar Modal"
              onPress={onPress}
              styles={{
                borderRadius: 0,
                height: Platform.OS === 'android' ? 40 : 60,
              }}
            />
          </View>
        </View> */}
      </Modal>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
