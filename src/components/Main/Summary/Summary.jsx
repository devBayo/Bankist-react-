import { useContext } from 'react';
import UsersContext from '../../../contexts/users-context';
import classes from './Summary.module.css';

const Summary = () => {
  const {
    state: {
      user: { movements },
    },
  } = useContext(UsersContext);

  const deposit = movements?.filter(movement => movement > 0);
  const totalDeposit = deposit?.reduce((prev, cur) => prev + cur, 0).toFixed(2);

  const withdrawal = movements?.filter(movement => movement < 0);
  const totalWithdrawal = Math.abs(
    withdrawal?.reduce((prev, cur) => prev + cur, 0)
  ).toFixed(2);

  return (
    <div className={classes['summary']}>
      <p className={classes['summary__label']}>In</p>
      <p
        className={`${classes['summary__value']}
        ${classes['summary__value--in']}
      `}
      >
        {totalDeposit}€
      </p>
      <p className={classes['summary__label']}>Out</p>
      <p
        className={`${classes['summary__value']}
        ${classes['summary__value--out']}
      `}
      >
        {totalWithdrawal}€
      </p>
      <p className={classes['summary__label']}>Interest</p>
      <p
        className={`${classes['summary__value']}
        ${classes['summary__value--interest']}
      `}
      >
        0000€
      </p>
      <button className={classes['btn--sort']}>&darr; SORT</button>
    </div>
  );
};

export default Summary;
