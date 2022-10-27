import classes from './MainHeader.module.css';

const MainHeader = props => {
  return (
    <div className={classes['balance']}>
      <div>
        <p className={classes['balance__label']}>Current balance</p>
        <p className={classes['balance__date']}>
          As of <span className={['date']}>05/03/2037</span>
        </p>
      </div>
      <p className={classes['balance__value']}>0000€</p>
    </div>
  );
};

export default MainHeader;
