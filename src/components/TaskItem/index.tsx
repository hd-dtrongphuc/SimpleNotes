import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '~theme/colors';

interface Props {
  name: string;
  value?: boolean;
  onChange?: (state: CheckboxState) => any;
  label: string;
}

interface CheckboxState {
  name: string;
  value: boolean;
}

const TaskItem: React.FC<Props> = ({
  value = false,
  onChange,
  label,
  name,
}) => {
  const [checked, setChecked] = useState<boolean>(value);

  useEffect(() => {
    (async () => {
      await onChange?.({
        name,
        value: checked,
      });
    })();
  }, [checked]);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.touchArea} onPress={handlePress}>
      <View style={styles.container}>
        <View style={[styles.checkbox, checked && styles.checked]}>
          {checked && (
            <Icon
              name='checkmark-sharp'
              size={12}
              color={checked ? colors.primaryWhite : colors.d1}
            />
          )}
        </View>
        <Text
          style={[styles.label, checked && styles.stroke]}
          numberOfLines={1}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 18,
    borderColor: colors.d1,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    borderWidth: 0,
    backgroundColor: colors.primary,
  },
  label: {
    marginLeft: 8,
    color: colors.d2,
    fontSize: 14,
  },
  stroke: {
    textDecorationLine: 'line-through',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchArea: {
    marginVertical: 8,
  },
});

export default TaskItem;
