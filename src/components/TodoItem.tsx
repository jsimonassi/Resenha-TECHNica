import React from 'react';
import {Text, View} from 'react-native';
import {Todo} from '../types/Todo';

interface Props {
  item: Todo;
}

export const TodoItem = ({item}: Props) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.time}</Text>
      <Text>{item.completed ? 'Feito!' : 'Precisa fazer'}</Text>
    </View>
  );
};
