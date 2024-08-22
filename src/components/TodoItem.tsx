import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Todo} from '../types/Todo';

interface Props {
  item: Todo;
}

export const TodoItem = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.time}</Text>
      <Text style={styles.description}>
        {item.completed ? 'Feito!' : 'Precisa fazer'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#aaaaaa',
    borderRadius: 10,
    fontSize: 20,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});
