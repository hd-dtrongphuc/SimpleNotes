import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useAuthContext } from '~contexts/authContext';
import {
  fetchNotesAction,
  noteListSelector,
} from '~reducers/features/noteSlice';
import colors from '~theme/colors';
import AddNotes from './components/AddNotes';
import NoteList from './components/NoteList';
import Search from './components/Search';

const Home = () => {
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const noteList = useSelector(noteListSelector);

  useLayoutEffect(() => {
    dispatch(fetchNotesAction());
  }, []);

  return (
    <View style={[styles.gutter, styles.flex]}>
      <View style={styles.horizontal}>
        <Text style={styles.text}>Welcome, </Text>
        <Text style={styles.user}>{user?.email}</Text>
      </View>
      <AddNotes />
      <Search />
      <NoteList data={noteList} />
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
  flex: {
    flex: 1,
  },
});

export default Home;
