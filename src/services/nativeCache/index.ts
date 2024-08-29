import {NativeModules} from 'react-native';
import {Todo} from '../../types/Todo';

const {TodoManager} = NativeModules;

export const NativeCache = {
  getTodoList: () => {
    return new Promise<Todo[]>((resolve, reject) => {
      TodoManager.getTodos()
        .then((todoList: Todo[]) => {
          resolve(todoList);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  },
  updateTodoList: (todoList: Todo[]) => {
    return new Promise<void>((resolve, reject) => {
      TodoManager.updateTodos(todoList)
        .then(() => {
          resolve();
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  },
};
