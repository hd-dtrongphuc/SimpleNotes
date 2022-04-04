import React from 'react';
import { RefreshControl, View } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import TaskItem from '~components/TaskItem';
import {
  fetchNotesAction,
  loadingSelector,
} from '~reducers/features/noteSlice';
import { NoteItem } from '~types';

interface Props {
  data: NoteItem[];
}

const NoteList: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);

  const onRefresh = () => {
    dispatch(fetchNotesAction());
  };

  const renderItem = ({ item }: { item: NoteItem }) => (
    <TaskItem
      name={item.id}
      id={item.id}
      completed={item.completed}
      value={item.value}
    />
  );

  return (
    <View style={{ flex: 1, marginTop: 12 }}>
      <KeyboardAwareFlatList
        data={data}
        renderItem={renderItem}
        enableOnAndroid={true}
        removeClippedSubviews={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default NoteList;
