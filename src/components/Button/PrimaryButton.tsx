import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';

import ButtonOpacity from './ButtonOpacity';
import colors from '~theme/colors';

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
}

const PrimaryButton = (props: Props) => {
  return (
    <ButtonOpacity {...props}>
      <Text
        style={{
          color: colors.primaryWhite,
          fontWeight: '600',
        }}
      >
        {props.children}
      </Text>
    </ButtonOpacity>
  );
};

export default PrimaryButton;
