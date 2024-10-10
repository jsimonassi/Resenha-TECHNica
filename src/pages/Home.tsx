import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import {TodoItem} from '../components/TodoItem';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTodoContext} from '../store/Todo';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const todoContext = useTodoContext();
  const [isLoading, setIsLoading] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

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
  }, [todoContext.actions]);

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

      <TouchableHighlight onPress={() => navigation.replace('AddTodo')}>
        <View>
          <Text>Add Todo</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
