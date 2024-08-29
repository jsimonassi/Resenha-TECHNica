import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {TodoItem} from '../components/TodoItem';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTodoContext} from '../store/Todo';

export const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const todoContext = useTodoContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    todoContext.actions
      .updateTodoCache()
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        todoContext.data.todoList.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))
      )}
    </SafeAreaView>
  );
};
