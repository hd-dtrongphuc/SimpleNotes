import React, { forwardRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextInput, TextInputProps, ViewStyle, TextStyle } from 'react-native';

import Input from './Input';

interface Props extends TextInputProps {
  name: string;
  label?: string;
  styles?: {
    wrapper?: ViewStyle;
    label?: TextStyle;
    input?: TextStyle;
    error?: TextStyle;
  };
}

const FormInput = forwardRef<TextInput, Props>(
  ({ name, ...inputProps }, ref) => {
    const { formState, control } = useFormContext();

    const { field } = useController({ name, control });

    return (
      <Input
        {...inputProps}
        error={formState.errors[name]?.message}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        ref={ref}
      />
    );
  },
);

export default FormInput;
