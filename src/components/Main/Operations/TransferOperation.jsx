import { useContext, useState } from 'react';
import Input from '../../UI/Input';
import OperationForm from './OperationForm';
import OperationIcon from './OperationIcon';
import classes from './Operations.module.css';
import UsersContext from '../../../contexts/users-context';

const TransferOperation = () => {
  const { dispatch } = useContext(UsersContext);
  const [input, setInput] = useState({
    recepient: '',
    amount: '',
  });

  const transferHandler = event => {
    event.preventDefault();
    dispatch({
      type: 'TRANSFER',
      recepient: input.recepient,
      amount: +input.amount,
    });

    setInput({
      recepient: '',
      amount: '',
    });
  };

  const onChangeHandler = event => {
    setInput(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <OperationForm type="transfer" formTitle="Transfer money">
      <Input
        onChange={onChangeHandler}
        input={{
          value: input.recepient,
          name: 'recepient',
          type: 'text',
          className: `${classes['form__input']}`,
        }}
      />
      <Input
        onChange={onChangeHandler}
        input={{
          value: input.amount,
          name: 'amount',
          type: 'number',
          className: `${classes['form__input']}`,
        }}
      />
      <button onClick={transferHandler} className={classes['form__btn']}>
        <OperationIcon />
      </button>
      <label className={classes['form__label']}>Transfer to</label>
      <label className={classes['form__label']}>Amount</label>
    </OperationForm>
  );
};

export default TransferOperation;
