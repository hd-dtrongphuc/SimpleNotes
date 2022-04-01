import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '~theme/colors';

const Search = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} placeholder='Search your notes' />
      <Icon
        name='search-outline'
        size={30}
        color={colors.g2}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    flex: 1,
    paddingLeft: 16,
    paddingRight: 50,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -15 }],
  },
});

export default Search;
