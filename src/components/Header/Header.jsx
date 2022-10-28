import classes from './Header.module.css';
import logo from '../../assets/logo.png';
import Input from '../UI/Input';
import { useContext } from 'react';
import UsersContext from '../../contexts/users-context';

const Header = () => {
  const { isLoggedIn, user, login, logout } = useContext(UsersContext);
  const onLoginHandler = event => {
    event.preventDefault();
    login();
  };

  return (
    <nav>
      <p className={classes['welcome']}>
        {isLoggedIn
          ? `Welcome back, ${user.owner.slice(0, user.owner.indexOf(' '))} `
          : 'Log in to get started'}
      </p>
      <img src={logo} alt="Logo" className={classes.logo} />
      <div
        className={`${classes['auth']} ${
          isLoggedIn ? classes['signed-in'] : ''
        }`}
      >
        <form onSubmit={onLoginHandler} className={classes['login']}>
          <Input
            input={{
              type: 'text',
              placeholder: 'user',
              className: `${classes['login__input']}
              ${classes['login__input--user']}
              `,
            }}
          />

          <Input
            input={{
              type: 'text',
              placeholder: 'PIN',
              maxLength: '4',
              className: `${classes['login__input']}
              ${classes['login__input--pin']}
              `,
            }}
          />
          <button type="submit" className={classes['login__btn']}>
            &rarr;
          </button>
        </form>
        <button onClick={logout} className={classes['logout']}>
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes['logout-icon']}
            viewBox="0 0 512 512"
          >
            <title>Log Out</title>
            <path
              d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
