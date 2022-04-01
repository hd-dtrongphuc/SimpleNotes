import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
// import auth from '@react-native-firebase/auth';

import Container from '~components/Container';
import Home from '~containers/Home';
import Fab from '~components/Button/Fab';
import colors from '~theme/colors';

const HomeScreen = () => {
  // const handleLogout = async () => {
  //   await auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // };

  return (
    <SafeAreaView>
      <Container>
        <Home />
      </Container>
      <Fab>
        <Icon name='add-sharp' size={24} color={colors.primaryWhite} />
      </Fab>
    </SafeAreaView>
  );
};

export default HomeScreen;
