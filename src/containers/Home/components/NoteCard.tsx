import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TaskItem from '~components/TaskItem';
import colors from '~theme/colors';

interface Props {
  height?: number;
}

const NoteCard: React.FC<Props> = ({ height }) => {
  return (
    <View style={[styles.card, { height: height ?? 100 }]}>
      <CardTitle>Tasks</CardTitle>
      {/* <View>
        <TaskItem name='' />
      </View> */}
    </View>
  );
};

const CardTitle: React.FC = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    width: '100%',
    maxHeight: 200,
    padding: 12,
  },
  title: {
    color: colors.d1,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default NoteCard;
