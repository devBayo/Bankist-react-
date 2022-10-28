import { useContext } from 'react';
import AuthContext from '../../contexts/auth-context';
import classes from './Main.module.css';

import MainHeader from './MainHeader/MainHeader';
import Movements from './Movements/Movements';
import Operations from './Operations/Operations';
import Summary from './Summary/Summary';
import Timer from './Timer/Timer';

const Main = () => {
  const authContext = useContext(AuthContext);

  return (
    <main
      className={`${classes.main} ${
        authContext.isLoggedIn ? classes['signed-in'] : ''
      }`}
    >
      <MainHeader />
      <Movements />
      <Summary />
      <Operations />
      <Timer />
    </main>
  );
};

export default Main;
