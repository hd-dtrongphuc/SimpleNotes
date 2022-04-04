import React from 'react';
import { Text, View } from 'react-native';

const RightSwipe = () => {
  return (
    <View
      style={{
        backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
      }}
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
    </View>
  );
};

export default RightSwipe;
