import { useContext, useState } from 'react';
import Input from '../../UI/Input';
import OperationForm from './OperationForm';
import OperationIcon from './OperationIcon';
import classes from './Operations.module.css';
import UsersContext from '../../../contexts/users-context';

const CloseAccOperation = () => {
  const { dispatch } = useContext(UsersContext);
  const [input, setInput] = useState({
    username: '',
    pin: '',
  });

  const closeAccountHandler = event => {
    event.preventDefault();
    dispatch({
      type: 'CLOSE_ACCOUNT',
      username: input.username,
      pin: input.pin,
    });

    setInput({
      username: '',
      pn: '',
    });
  };

  const inputChangeHandler = event => {
    setInput(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <OperationForm type="close" formTitle="Close account">
      <Input
        onChange={inputChangeHandler}
        input={{
          name: 'username',
          value: input.username,
          type: 'text',
          className: `${classes['form__input']}`,
        }}
      />

      <Input
        onChange={inputChangeHandler}
        input={{
          name: 'pin',
          value: input.pin,
          type: 'password',
          maxLength: '6',
          className: `${classes['form__input']}`,
        }}
      />

      <button
        onClick={closeAccountHandler}
        className={`${classes['form__btn']}`}
      >
        <OperationIcon />
      </button>
      <label className={classes['form__label']}>Confirm user</label>
      <label className={classes['form__label']}>Confirm PIN</label>
    </OperationForm>
  );
};

export default CloseAccOperation;
