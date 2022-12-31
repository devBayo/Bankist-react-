import { initialState } from './utils';

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
      ...state,
      users: updatedUsers,
    };
  }

  if (action.type === 'LOGIN') {
    const user = state.users.find(user => user.username === action.username);
    if (!user || user?.pin !== action.pin) return { ...state };
    return {
      ...state,
      user,
      isLoggedIn: true,
    };
  }

  if (action.type === 'LOGOUT') {
    return {
      ...state,
      user: '',
      isLoggedIn: false,
    };
  }

  if (action.type === 'TRANSFER') {
    let user = state.user;
    const { recepient, amount } = action;

    // checks if recepient exist
    const recepientExists = state.users.some(
      user => user.username === recepient
    );
    const userBalance = user.movements.reduce((prev, cur) => prev + cur, 0);

    //// Validate transfer
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
      return { ...state, users: updatedUsers, user };
    } else {
      return { ...state };
    }
  }

  if (action.type === 'LOAN') {
    const user = state.user;
    const { amount } = action;

    // checks if loan can be granted
    const isApproved = amount > 0;
    console.log(isApproved);

    if (!isApproved) return { ...state };
    const updatedUsers = [...state.users];
    const userIndex = state.users.findIndex(
      user_ => user_.username === user.username
    );
    user.movements.unshift(amount);
    updatedUsers[userIndex] = user;
    return { ...state, users: updatedUsers, user };
  }

  if (action.type === 'CLOSE_ACCOUNT') {
    const user = state.user;

    if (user.username === action.username && user.pin === action.pin) {
      const updatedUsers = [...state.users];
      const userIndex = state.users.findIndex(
        user_ => user_.username === user.username
      );
      updatedUsers.splice(userIndex, 1);

      return { ...state, users: updatedUsers, user: '', isLoggedIn: false };
    } else {
      return { ...state };
    }
  }

  return initialState;
};

export default userReducer;
