import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '~theme/colors';

interface Props {
  title: string;
}

const HomeHeader: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primaryWhite,
    height: 48,
    width: '100%',
    flexDirection: 'row',
    shadowOpacity: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.d1,
  },
});

export default HomeHeader;
