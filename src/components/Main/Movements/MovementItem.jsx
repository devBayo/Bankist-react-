import classes from './MovementItem.module.css';

const MovementItem = props => {
  return (
    <li className={classes['movements__row']}>
      <div
        className={`${classes['movements__type']} ${
          classes[`movements__type--${props.type}`]
        }`}
      >
        {props.index} {props.type}
      </div>
      <div className={classes['movements__date']}></div>
      {/* <div className={classes['movements__date']}>24/01/2037</div> */}
      <div className={classes['movements__value']}>{props.value}€</div>
    </li>
  );
};

export default MovementItem;
