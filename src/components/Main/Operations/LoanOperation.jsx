import { useContext, useState } from 'react';
import Input from '../../UI/Input';
import OperationForm from './OperationForm';
import OperationIcon from './OperationIcon';
import classes from './Operations.module.css';
import UsersContext from '../../../contexts/users-context';

const LoanOperation = () => {
  const { dispatch } = useContext(UsersContext);
  const [loan, setLoan] = useState('');

  const requestLoanHandler = event => {
    event.preventDefault();
    dispatch({ type: 'LOAN', amount: +loan });

    setLoan('');
  };

  const onChangeHandler = event => {
    setLoan(+event.target.value);
  };

  return (
    <OperationForm type="loan" formTitle="Request loan">
      <Input
        onChange={onChangeHandler}
        input={{
          value: loan,
          type: 'number',
          className: `${classes['form__input']}`,
        }}
      />
      <button
        onClick={requestLoanHandler}
        className={`${classes['form__btn']}`}
      >
        <OperationIcon />
      </button>
      <label></label>
      <label className={`${classes['form__label']}`}>Amount</label>
    </OperationForm>
  );
};

export default LoanOperation;
