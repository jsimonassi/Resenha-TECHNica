import {useContext, useState} from 'react';
import {StoreContext} from '..';
import {Todo} from '../../types/Todo';
import {Api} from '../../services/api';

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
