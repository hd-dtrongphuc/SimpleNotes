import React from 'react';
import { StyleSheet, View } from 'react-native';

import NoteList from './components/NoteList';
import Search from './components/Search';

const Home = () => {
  return (
    <View style={[styles.gutter]}>
      <Search />
      <NoteList />
    </View>
  );
};

const styles = StyleSheet.create({
  gutter: {
    marginTop: 16,
  },
});

export default Home;
