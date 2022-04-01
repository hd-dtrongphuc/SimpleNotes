import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

interface Props {
  isOpen?: boolean;
}

const Overlay: React.FC<Props> = ({ isOpen = false }) => {
  return isOpen ? <View style={styles.layer}></View> : <></>;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Overlay;
