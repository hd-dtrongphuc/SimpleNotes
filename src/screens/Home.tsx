import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

import PrimaryButton from '~components/Button/PrimaryButton';

const HomeScreen = () => {
  const handleLogout = async () => {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <PrimaryButton onPress={handleLogout}>Logout</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
