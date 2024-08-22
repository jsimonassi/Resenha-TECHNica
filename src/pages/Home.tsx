import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {TodoItem} from '../components/TodoItem';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Todo} from '../types/Todo';

const todoMockList: Todo[] = [
  {
    name: 'Ler sobre SOLID',
    completed: false,
    time: '01-02-1999',
  },
];

export const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const {TodoManager} = NativeModules;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {todoMockList.map((item, index) => (
        <TodoItem item={item} key={index} />
      ))}
    </SafeAreaView>
  );
};
