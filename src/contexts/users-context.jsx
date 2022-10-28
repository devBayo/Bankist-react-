import React, { useEffect, useReducer } from 'react';

const UsersContext = React.createContext({
  users: [],
  user: '',
  isLoggedIn: '',
  login: () => {},
  logout: () => {},
  transfer: (recepient, amount) => {},
  requestLoan: amount => {},
});

export default UsersContext;

const user1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2022-06-19T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const user2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -790, -3210],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
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
          .join(''))
      );
    });

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
    const user = state.user;
    const { recepient, amount } = action;
    console.log(user);

    // checks if recepient exist
    const recepientExists = state.users.some(
      user => user.username === recepient
    );
    const userBalance = user.movements.reduce((prev, cur) => prev + cur, 0);

    // Validate transfer
    if (
      recepientExists &&
      recepient !== user.username &&
      amount > 0 &&
      amount <= userBalance
    ) {
      const updatedUsers = [...state.users];

      const recepientInState = state.users.find(
        user => user.username === recepient
      );

      const recepientIndex = state.users.findIndex(
        user => user.username === recepient
      );

      const userIndex = state.users.findIndex(
        user_ => user_.username === user.username
      );
      user.movements.unshift(-amount);
      recepientInState.movements.unshift(amount);

      updatedUsers[userIndex] = user;
      updatedUsers[recepientIndex] = recepientInState;
      return {
        ...state,
        users: updatedUsers,
        user,
      };
    } else {
      // console.log('Err');
      return { ...state };
    }
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

  const requestLoan = amount => {
    dispatchUser({ type: 'LOAN', amount });
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
        requestLoan,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
