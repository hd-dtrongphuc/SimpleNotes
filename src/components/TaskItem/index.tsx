import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  removeSingleNoteAction,
  updateSingleNoteAction,
} from '~reducers/features/noteSlice';
import colors from '~theme/colors';
import TaskInput from './TaskInput';
import RightSwipe from './RightSwipe';

interface Props {
  name: string;
  id: string;
  completed?: boolean;
  value: string;
}

export interface CheckboxState {
  id: string;
  value: boolean;
}

const TaskItem: React.FC<Props> = ({ completed = false, value, id }) => {
  const [checked, setChecked] = useState<boolean>(completed);
  const [text, setText] = useState<string>(value);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(
      updateSingleNoteAction({
        id,
        completed: !checked,
      }),
    );
    setChecked(!checked);
  };

  const handleSubmitEditing = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    if (e.nativeEvent.text.length > 0 && value !== e.nativeEvent.text) {
      dispatch(
        updateSingleNoteAction({
          id,
          value: e.nativeEvent.text,
        }),
      );
    } else {
      setText(text);
    }
  };

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleBlur = () => {
    if (text.length > 0 && value !== text) {
      dispatch(
        updateSingleNoteAction({
          id,
          value: text,
        }),
      );
    } else {
      setText(text);
    }
  };

  const handleDelete = () => {
    dispatch(removeSingleNoteAction(id));
  };

  return (
    <GestureHandlerRootView style={[styles.margin]}>
      <Swipeable renderRightActions={() => RightSwipe(handleDelete)}>
        <TouchableOpacity onPress={handlePress}>
          <View style={[styles.container]}>
            <View style={[styles.checkbox, checked && styles.checked]}>
              {checked && (
                <Icon
                  name='checkmark-sharp'
                  size={12}
                  color={checked ? colors.primaryWhite : colors.d1}
                />
              )}
            </View>
            <TaskInput
              checked={checked}
              onSubmitEditing={handleSubmitEditing}
              onChangeText={handleChangeText}
              value={text}
              onBlur={handleBlur}
            />
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 18,
    borderColor: colors.d1,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    borderWidth: 0,
    backgroundColor: colors.primary,
  },
  label: {
    marginLeft: 8,
    color: colors.d2,
    fontSize: 14,
  },
  stroke: {
    textDecorationLine: 'line-through',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  margin: {
    marginVertical: 8,
  },
  ignoreBorder: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default TaskItem;
