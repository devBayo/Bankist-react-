const user1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000],
  interestRate: 1.2, // %
  pin: '1111',

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
  pin: '2222',

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

export const initialState = {
  users: DUMMY_USERS,
  user: '',
  isLoggedIn: false,
};
