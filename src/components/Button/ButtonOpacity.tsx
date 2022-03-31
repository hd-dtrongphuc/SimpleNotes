import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import colors from '~theme/colors';

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
}

const ButtonOpacity: React.FC<Props> = ({
  children,
  isLoading = false,
  ...props
}) => {
  const { style, ...touchableProps } = props;

  return (
    <TouchableOpacity
      style={[styles.button, style, props.disabled ? styles.disabled : null]}
      activeOpacity={0.8}
      {...touchableProps}
    >
      {!isLoading ? (
        children
      ) : (
        <ActivityIndicator size="small" color={colors.primaryWhite} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: colors.primary,
    height: 40,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: colors.primaryDisabled,
  },
});

export default ButtonOpacity;
