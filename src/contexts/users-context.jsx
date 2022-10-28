import React, { useEffect, useReducer } from 'react';

const UsersContext = React.createContext({
  users: [],
  user: '',
  isLoggedIn: '',
  login: () => {},
  logout: () => {},
});

export default UsersContext;

const user1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-06-16T17:01:17.194Z',
    '2022-06-18T23:36:17.929Z',
    '2022-06-19T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const user2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const DUMMY_USERS = [user1, user2];

const userReducer = (state, action) => {
  if (action.type === 'INIT') {
    const updatedUsers = [...state.users];
    updatedUsers.forEach(user => {
      return (
        // Logic for username
        (user.username = user.owner
          .split(' ')
          .map(name => name[0].toLowerCase())
          .join('')),
        // Logic for total balance
        (user.balance = user.movements.reduce((prev, cur) => prev + cur, 0))
      );
    });

    console.log(updatedUsers);
    return {
      users: updatedUsers,
      user: updatedUsers[0], // test
      isLoggedIn: true,
    };
  }

  if (action.type === 'LOGIN') {
    const user = state.users[0];
    console.log(user);
    return {
      users: state.users,
      user,
      isLoggedIn: true,
    };
  }

  if (action.type === 'LOGOUT') {
    return {
      users: state.users,
      user: '',
      isLoggedIn: false,
    };
  }

  if (action.type === 'TRANSFER') {
    console.log('Approving transfer');
  }

  return {
    users: DUMMY_USERS,
    user: '',
    isLoggedIn: false,
  };
};

export const UsersContextProvider = props => {
  const [usersState, dispatchUser] = useReducer(userReducer, {
    users: DUMMY_USERS,
    user: '',
    isLoggedIn: false,
  });

  useEffect(() => {
    dispatchUser({ type: 'INIT' });
  }, []);

  const login = (username, password) => {
    dispatchUser({ type: 'LOGIN', username, password });
  };

  const logout = () => {
    dispatchUser({ type: 'LOGOUT' });
  };

  const transfer = (recepient, amount) => {
    dispatchUser({ type: 'TRANSFER', recepient, amount });
  };

  return (
    <UsersContext.Provider
      value={{
        users: usersState.users,
        user: usersState.user,
        isLoggedIn: usersState.isLoggedIn,
        login,
        logout,
        transfer,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
