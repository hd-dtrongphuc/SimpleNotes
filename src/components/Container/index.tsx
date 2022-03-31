import React from 'react';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';

import colors from '~theme/colors';

const Container: React.FC<ViewProps> = ({ children, ...props }) => {
  return (
    <SafeAreaView style={[styles.container, props?.style]} {...props}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: colors.primaryWhite,
    width: '100%',
    height: '100%',
    color: '#fff',
  },
});

export default Container;
