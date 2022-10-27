import classes from './Summary.module.css';

const Summary = props => {
  return (
    <div className={classes['summary']}>
      <p className={classes['summary__label']}>In</p>
      <p
        className={`${classes['summary__value']}
        ${classes['summary__value--in']}
      `}
      >
        0000€
      </p>
      <p className={classes['summary__label']}>Out</p>
      <p
        className={`${classes['summary__value']}
        ${classes['summary__value--out']}
      `}
      >
        0000€
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
