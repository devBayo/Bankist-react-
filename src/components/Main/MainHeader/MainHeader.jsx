import { useContext } from 'react';
import UsersContext from '../../../contexts/users-context';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const {
    user: { movements },
  } = useContext(UsersContext);

  const balance = movements?.reduce((prev, cur) => prev + cur, 0);

  return (
    <div className={classes['balance']}>
      <div>
        <p className={classes['balance__label']}>Current balance</p>
        <p className={classes['balance__date']}>
          As of <span className={['date']}>05/03/2037</span>
        </p>
      </div>
      <p className={classes['balance__value']}>{balance?.toFixed(2)}€</p>
    </div>
  );
};

export default MainHeader;
