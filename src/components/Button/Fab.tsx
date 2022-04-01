import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import colors from '~theme/colors';

interface Props extends TouchableOpacityProps {
  direction?: 'left' | 'right';
}

const Fab: React.FC<Props> = ({
  children,
  direction = 'right',
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[direction], style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 16,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.primary,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
  },
  right: {
    right: 16,
  },
  left: {
    left: 16,
  },
});

export default Fab;
