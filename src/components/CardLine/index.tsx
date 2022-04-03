import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '~theme/colors';
import { shadows } from '~theme';

interface Props {
  label: string;
  total?: number;
  imageSource?: string;
  onPress?: () => void;
}

const CardLine: React.FC<Props> = ({ label, total, imageSource, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.touchable}
      onPress={onPress}
      underlayColor={colors.g1}
      activeOpacity={0.8}
    >
      <View style={[styles.card, styles.horizontal]}>
        {imageSource && (
          <Image
            style={styles.image}
            source={{
              uri: imageSource,
            }}
          />
        )}
        <Text style={styles.label}>{label}</Text>
        <View style={styles.horizontal}>
          <Text style={[styles.text, { marginRight: 4 }]}>{total}</Text>
          <Icon name='chevron-forward' color={colors.g2} size={16} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: colors.secondary,
    ...shadows,
    padding: 16,
    borderRadius: 6,
    marginVertical: 4,
  },
  card: {
    justifyContent: 'space-between',
  },
  image: {},
  label: {
    color: colors.d1,
    fontWeight: '600',
  },
  text: {
    color: colors.g2,
    fontSize: 14,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CardLine;
