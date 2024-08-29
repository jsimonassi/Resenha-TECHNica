import {useContext, useState} from 'react';
import {StoreContext} from '..';
import {Todo} from '../../types/Todo';
import {Api} from '../../services/api';
import {NativeCache} from '../../services/nativeCache';

export const useTodoContext = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Trying to access context outside provider.');
  }

  return store.todo;
};

export const __useTodoData = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const updateTodoCache = async () => {
    try {
      const webList = await Api.getTodoFromWeb();
      await NativeCache.updateTodoList(webList);
      setTodoList(webList);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return {
    data: {
      todoList,
    },
    actions: {
      updateTodoCache,
    },
  };
};
