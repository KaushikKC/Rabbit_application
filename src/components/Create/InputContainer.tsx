import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import {COLORS} from '../../constants/color';
import {wp} from '../../utils/ScreenDimension';

const EditableInputContainer = ({
  label,
  initialName,
  initialDescription,
  onSave,
}: any) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    onSave(label, name, description);
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.name}>{initialName}</Text>
            <Text style={styles.description}>{initialDescription}</Text>
          </View>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => setModalVisible(true)}>
            <Image source={require('../../assets/images/Edit.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.regularBox}>
          <View style={styles.regularItems}>
            <Image
              source={require('../../assets/images/ArrowsClockwise.png')}
            />
            <Text style={styles.regularItemsText}>Daily</Text>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Habit</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={text => setDescription(text)}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  //   name: {
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //   },
  //   description: {
  //     color: COLORS.Grey,
  //   },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.WhiteBG,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: COLORS.Gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: COLORS.WhiteBG,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: wp(100) - 48,
    height: 108,
    padding: 16,
    backgroundColor: COLORS.WhiteBG,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  edit: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: COLORS.Grey,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.Black,
    fontFamily: 'Quicksand-semiBold',
    fontSize: 14,
  },
  description: {
    fontFamily: 'Quicksand-Regular',
    color: COLORS.Grey,
  },
  regularBox: {
    height: 32,
    backgroundColor: COLORS.Gray,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  regularItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  regularItemsText: {
    color: COLORS.Black,
    fontFamily: 'Quicksand-Regular',
    marginHorizontal: 4,
  },
  regularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default EditableInputContainer;
