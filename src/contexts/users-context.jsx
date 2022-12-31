import React, { useEffect, useReducer, useMemo, createContext } from 'react';
import { initialState } from './utils';
import userReducer from './user-reducer';

const UsersContext = createContext({
  users: [],
  user: '',
  isLoggedIn: '',
});

export default UsersContext;

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

  const appContext = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <UsersContext.Provider value={appContext}>{children}</UsersContext.Provider>
  );
};
