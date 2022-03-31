import React, { forwardRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';

import Input from './Input';

interface Props extends TextInputProps {
  name: string;
  label?: string;
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
