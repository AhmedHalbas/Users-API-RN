import React, { createContext } from 'react';
import { useReducer } from 'react';
import { usersReducer } from '../reducers/users';

export const context = createContext();
context.displayName = 'Users';

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, {});
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
export default UsersProvider;
