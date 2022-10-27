import classes from './Timer.module.css';

const Timer = props => {
  return (
    <p className={classes['logout-timer']}>
      You will be logged out in <span className={classes['timer']}>05:00</span>
    </p>
  );
};

export default Timer;
