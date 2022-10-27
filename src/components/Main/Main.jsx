import classes from './Main.module.css';

import MainHeader from './MainHeader/MainHeader';
import Movements from './Movements/Movements';
import Operations from './Operations/Operations';
import Summary from './Summary/Summary';
import Timer from '../Timer/Timer';

const Main = () => {
  return (
    <main className={classes.app}>
      <MainHeader />
      <Movements />
      <Summary />
      <Operations />
      <Timer />
    </main>
  );
};

export default Main;
