import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

import colors from '~theme/colors';

interface Props {
  title: string;
}

const HomeHeader: React.FC<Props> = ({ title }) => {
  const handleLogout = async () => {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.user} onPress={handleLogout}>
        <Icon name='exit-outline' color={colors.primary} size={24} />
      </Pressable>
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
  user: {
    marginRight: 32,
  },
});

export default HomeHeader;
