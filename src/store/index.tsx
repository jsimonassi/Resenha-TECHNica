import React, {createContext} from 'react';
import {__useTodoData} from './Todo';

export interface StoreContextType {
  todo: ReturnType<typeof __useTodoData>;
}

export const StoreContext = createContext<StoreContextType | null>(null);

interface StoreProviderProps {
  children: React.ReactNode;
}

export const MainStoreProvider = ({children}: StoreProviderProps) => {
  return (
    <StoreContext.Provider
      value={{
        todo: __useTodoData(),
      }}>
      {children}
    </StoreContext.Provider>
  );
};
