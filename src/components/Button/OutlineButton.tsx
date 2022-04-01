import React from 'react';
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';

import ButtonOpacity from './ButtonOpacity';
import colors from '~theme/colors';

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
}

const OutlineButton = (props: Props) => {
  const { style, ...restProps } = props;

  return (
    <ButtonOpacity style={[styles.outlineButton, style]} {...restProps}>
      <Text
        style={{
          color: colors.d1,
          fontWeight: '600',
        }}
      >
        {props.children}
      </Text>
    </ButtonOpacity>
  );
};

const styles = StyleSheet.create({
  outlineButton: {
    borderColor: colors.g1,
    backgroundColor: colors.secondary,
  },
});

export default OutlineButton;
