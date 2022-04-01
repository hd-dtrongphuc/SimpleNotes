import React from 'react';
import { FormProvider } from 'react-hook-form';
import {
  Modal,
  Pressable as TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OutlineButton from '~components/Button/OutlineButton';
import PrimaryButton from '~components/Button/PrimaryButton';
import FormInput from '~components/Form/FormInput';
import useFormProvider from '~hooks/useFormProvider';
import colors from '~theme/colors';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddFolderModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const formMethods = useFormProvider({
    defaultValues: {
      name: '',
    },
  });

  return (
    <TouchableWithoutFeedback onPress={() => console.log('click')}>
      <View style={styles.centeredView}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={isOpen}
          onRequestClose={onClose}
        >
          <View style={styles.centeredView}>
            <FormProvider {...formMethods}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>New Folder</Text>
                <Text style={styles.modalText}>
                  Enter a name for this folder.
                </Text>
                <FormInput
                  name='name'
                  placeholder='Name'
                  styles={inputStyles}
                />
                <View style={styles.footer}>
                  <OutlineButton
                    style={[styles.footerButton, { marginRight: 10 }]}
                    onPress={onClose}
                  >
                    Cancel
                  </OutlineButton>
                  <PrimaryButton
                    style={[styles.footerButton, { marginLeft: 10 }]}
                  >
                    Save
                  </PrimaryButton>
                </View>
              </View>
            </FormProvider>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
  modalTitle: {
    marginBottom: 4,
    textAlign: 'center',
    fontWeight: '600',
    color: colors.d1,
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: colors.d1,
    fontWeight: '400',
    fontSize: 14,
  },
  footer: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerButton: {
    width: 90,
  },
});

const inputStyles = StyleSheet.create({
  input: {
    minWidth: 200,
  },
});

export default AddFolderModal;
