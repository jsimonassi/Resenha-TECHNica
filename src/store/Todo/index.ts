import {useContext} from 'react';
import {StoreContext} from '..';

export const useTodoContext = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Trying to access context outside provider.');
  }

  return store.todo;
};

export const __useTodoData = () => {
  return {
    data: {},
    actions: {},
  };
};
