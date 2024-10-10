/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {MainStoreProvider} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './routes';

function App(): React.JSX.Element {
  return (
    <MainStoreProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      {/* <AddTodo /> */}
    </MainStoreProvider>
  );
}

export default App;
