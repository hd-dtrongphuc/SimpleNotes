import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthContext } from '~contexts/authContext';
import colors from '~theme/colors';

import NoteList from './components/NoteList';
import Search from './components/Search';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <View style={[styles.gutter]}>
      <Search />
      <View style={styles.horizontal}>
        <Text style={styles.text}>Welcome, </Text>
        <Text style={styles.user}>{user?.email}</Text>
      </View>
      <NoteList />
    </View>
  );
};

const styles = StyleSheet.create({
  gutter: {
    marginTop: 16,
  },
  user: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.primary,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.d1,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Home;
