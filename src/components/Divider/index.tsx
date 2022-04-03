import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ViewProps } from 'react-native';

import colors from '~theme/colors';

interface Props extends ViewProps {
  direction?: 'horizontal' | 'vertical';
}

const Divider: React.FC<Props> = ({
  direction = 'horizontal',
  style,
  ...props
}) => {
  return (
    <View
      style={[
        styles.base,
        direction === 'horizontal' ? styles.dividerX : styles.dividerY,
        style,
      ]}
      {...props}
    ></View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  dividerX: {
    height: 1,
    width: '100%',
  },
  base: {
    backgroundColor: colors.g1,
  },
  dividerY: {
    height: '100%',
    width: 1,
  },
});
