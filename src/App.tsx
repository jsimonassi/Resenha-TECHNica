/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Home} from './pages/Home';
import {MainStoreProvider} from './store';

function App(): React.JSX.Element {
  return (
    <MainStoreProvider>
      <Home />
    </MainStoreProvider>
  );
}

export default App;
