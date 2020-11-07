import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext(); //StateContext

export const DataLayer = ({ initialState, reducer, children }) => ( // children is the <App />
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Whenever Dispatch Action or GetValue from datalayer
export const useDataLayerValue = () => useContext(DataLayerContext);