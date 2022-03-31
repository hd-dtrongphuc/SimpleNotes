import React, { forwardRef } from 'react';
import {
  Text,
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import colors from '~theme/colors';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  styles?: {
    wrapper?: ViewStyle;
    label?: TextStyle;
    input?: TextStyle;
    error?: TextStyle;
  };
}

const Input = forwardRef<TextInput, Props>(
  ({ label, error, styles, ...inputProps }, ref) => {
    const fullStyles = { ...defaultStyles, ...(styles ?? {}) };

    return (
      <View style={fullStyles.wrapper}>
        {label && <Text style={fullStyles.label}>{label}</Text>}
        <TextInput
          style={[
            fullStyles.input,
            error ? { borderColor: colors.r1, borderWidth: 1.5 } : {},
          ]}
          placeholderTextColor={colors.g2}
          ref={ref}
          {...inputProps}
        />
        {error && <Text style={fullStyles.error}>{error}</Text>}
      </View>
    );
  },
);

const defaultStyles = StyleSheet.create({
  label: {
    marginBottom: 6,
    color: colors.primaryWhite,
  },
  wrapper: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: 14,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.g1,
  },
  error: {
    color: colors.r1,
    marginTop: 4,
    marginBottom: 4,
    fontStyle: 'italic',
  },
});

export default Input;