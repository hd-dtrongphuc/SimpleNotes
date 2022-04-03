import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';

import CardLine from '~components/CardLine';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'Notes',
    total: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'Today',
    total: 5,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    label: 'Tomorrow',
    total: 12,
  },
];

const FolderList = () => {
  const navigation = useNavigation();

  const onPress = (id: string) =>
    navigation.navigate('Folder', {
      id,
    });

  const renderItem = ({ item }: any) => (
    <CardLine
      label={item.label}
      total={item.total}
      onPress={() => onPress(item.id)}
    />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FolderList;
