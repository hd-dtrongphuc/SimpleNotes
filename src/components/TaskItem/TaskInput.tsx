import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';

import colors from '~theme/colors';

interface Props extends TextInputProps {
  checked?: boolean;
}

const TaskInput: React.FC<Props> = ({ checked, onKeyPress, ...props }) => {
  const inputStyles = StyleSheet.create({
    input: {
      borderWidth: 0,
      backgroundColor: 'transparent',
      color: colors.d2,
      fontSize: 14,
      paddingHorizontal: 0,
      paddingVertical: 0,
      textDecorationLine: checked ? 'line-through' : 'none',
    },
    wrapper: {
      marginBottom: 0,
      paddingLeft: 8,
      flex: 1,
    },
  });

  return (
    <View style={[inputStyles.wrapper]}>
      <TextInput
        style={[inputStyles.input]}
        placeholderTextColor={colors.g2}
        multiline={true}
        onKeyPress={onKeyPress}
        returnKeyType='next'
        blurOnSubmit={true}
        {...props}
      />
    </View>
  );
};

export default TaskInput;
