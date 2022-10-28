import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: '',
  login: () => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
