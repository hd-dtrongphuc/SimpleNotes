import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch } from 'react-redux';
import { addNotesAction } from '~reducers/features/noteSlice';

import colors from '~theme/colors';

const AddNotes = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  const handleTextChange = (_text: string) => {
    setText(_text);
  };

  const handleAddNotes = async () => {
    dispatch(
      addNotesAction({
        value: text,
        completed: false,
      }),
    );
    setText('');
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder='Add new notes'
        onSubmitEditing={handleAddNotes}
        value={text}
        onChangeText={handleTextChange}
        blurOnSubmit={true}
      />
      {/* <Icon
        name='note-outline'
        size={30}
        color={colors.g2}
        style={styles.icon}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    flex: 1,
    paddingLeft: 16,
    paddingRight: 50,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -15 }],
  },
});

export default AddNotes;
