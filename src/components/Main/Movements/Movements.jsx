import classes from './Movements.module.css';

const Movements = props => {
  return (
    <div className={classes['movements']}>
      <div className={classes['movements__row']}>
        <div
          className={`${classes['movements__type']} ${classes['movements__type--withdrawal']}`}
        >
          1 withdrawal
        </div>
        <div className={classes['movements__date']}>24/01/2037</div>
        <div className={classes['movements__value']}>-378€</div>
      </div>

      <div className={classes['movements__row']}>
        <div
          className={`${classes['movements__type']} ${classes['movements__type--deposit']}`}
        >
          2 deposit
        </div>
        <div className={classes['movements__date']}>3 days ago</div>
        <div className={classes['movements__value']}>4 000€</div>
      </div>
    </div>
  );
};

export default Movements;
