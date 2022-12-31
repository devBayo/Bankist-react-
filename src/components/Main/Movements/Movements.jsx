import { useContext } from 'react';
import UsersContext from '../../../contexts/users-context';
import MovementItem from './MovementItem';
import classes from './Movements.module.css';

const Movements = () => {
  const {
    state: {
      user: { movements },
    },
  } = useContext(UsersContext);

  return (
    <ul className={classes['movements']}>
      {movements?.map((movement, i) => {
        const type = movement > 0 ? 'deposit' : 'withdrawal';

        return (
          <MovementItem key={i} index={i + 1} type={type} value={movement} />
        );
      })}
    </ul>
  );
};

export default Movements;
