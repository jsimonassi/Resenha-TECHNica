import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages/Home';
import {AddTodo} from '../pages/AddTodo';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
  );
};

export type MainStackParamList = {
  Home: undefined;
  AddTodo: undefined;
};
