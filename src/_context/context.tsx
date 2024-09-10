"use client";
import { createContext, useContext, useReducer, useMemo, ReactNode, Dispatch } from "react";
import rootReducer from "../_reducers/combineReducers";
import { usersInitialState } from "./initialState";

interface Action {
  type: string;
  payload?: any;
  error?: any;
}

const initialState = {
  userReducer: usersInitialState.getAllUsers,
};

type DataContextType = [typeof initialState, Dispatch<Action>];
const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => [state, dispatch] as DataContextType, [state]);

  return (
    <DataContext.Provider value={store}>
      {children}
    </DataContext.Provider>
  );
};

function useData(): DataContextType {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
}

export { DataProvider, useData };
