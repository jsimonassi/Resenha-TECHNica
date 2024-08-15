/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text, useColorScheme, NativeModules} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Todo} from './types/Todo';
import {TodoItem} from './components/TodoItem';

const todoMockList: Todo[] = [
  {
    name: 'Ler sobre SOLID',
    completed: false,
    time: '01-02-1999',
  },
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const {TodoManager} = NativeModules;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Hello World!</Text>
      {todoMockList.map((item, index) => (
        <TodoItem item={item} key={index} />
      ))}
    </SafeAreaView>
  );
}

export default App;



App -> SafeAreaView -> TodoItem -> TodoItemFilho -> TodoItemNeto



const TodoItemNeto =() => {
  const {items, getTodo} = useItemsContext();


}


useItemsContext {
  data = useState([]);


  export methods {
    getTodo()
  }
}

