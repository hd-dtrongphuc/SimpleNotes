import { StyleSheet, TextInputProps } from 'react-native';
import React from 'react';

import FormInput from '~components/Form/FormInput';
import colors from '~theme/colors';

interface Props extends TextInputProps {
  name: string;
  checked?: boolean;
}

const TaskInput: React.FC<Props> = ({
  name,
  checked,
  onKeyPress,
  ...props
}) => {
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
    <FormInput
      name={name}
      styles={inputStyles}
      multiline={true}
      onKeyPress={onKeyPress}
      returnKeyType='next'
      blurOnSubmit={true}
      {...props}
    />
  );
};

export default TaskInput;
