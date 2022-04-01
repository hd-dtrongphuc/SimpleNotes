import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '~components/Container';
import Home from '~containers/Home';
import Fab from '~components/Button/Fab';
import colors from '~theme/colors';
import AddFolderModal from '~containers/Home/components/AddFolderModal';
import useDisclosure from '~hooks/useDisclosure';

const HomeScreen = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <SafeAreaView>
      <Container>
        <Home />
        <AddFolderModal isOpen={isOpen} onClose={onClose} />
      </Container>
      <Fab onPress={onOpen}>
        <Icon name='add-sharp' size={24} color={colors.primaryWhite} />
      </Fab>
    </SafeAreaView>
  );
};

export default HomeScreen;
