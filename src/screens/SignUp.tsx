import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Container from '~components/Container';
import colors from '~theme/colors';
import SignUpForm from '~containers/SignUpForm';

const SignUpScreen = () => {
  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <SignUpForm />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    color: colors.d1,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
});

export default SignUpScreen;
