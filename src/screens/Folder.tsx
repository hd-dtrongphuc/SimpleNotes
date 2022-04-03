import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from '~components/Container';
import NoteForm from '~containers/NoteForm';
import { RootStackParamList } from '~navigation';

const FolderScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Folder'>>();

  return (
    <Container>
      <View style={styles.wrapper}>
        <NoteForm id={params.id} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
  },
});

export default FolderScreen;
