import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RightSwipe = (handleDelete: () => void) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
      }}
      onPress={handleDelete}
    >
      <Text
        style={{
          color: '#1b1a17',
          fontWeight: '600',
          paddingHorizontal: 20,
        }}
      >
        Delete
      </Text>
    </TouchableOpacity>
  );
};

export default RightSwipe;
