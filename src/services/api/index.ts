import axios from 'axios';
import {Todo} from '../../types/Todo';

export const Api = {
  getTodoFromWeb: () => {
    return new Promise<Todo[]>((resolve, reject) => {
      axios
        .get(
          'https://81a05764-e1d0-4c67-a9f2-04c3e1033b1a.mock.pstmn.io/api/v1/todo',
        )
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
