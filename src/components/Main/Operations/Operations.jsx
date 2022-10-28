import { useContext, useRef } from 'react';
import Input from '../../UI/Input';
import OperationForm from './OperationForm';
import OperationIcon from './OperationIcon';
import classes from './Operations.module.css';
import UsersContext from '../../../contexts/users-context';

const TransferOperation = props => {
  const usersContext = useContext(UsersContext);
  const recepientInputRef = useRef();
  const amountInputRef = useRef();

  const transferHandler = event => {
    event.preventDefault();
    const recepient = recepientInputRef.current.value;
    const amount = +amountInputRef.current.value;
    usersContext.transfer(recepient, amount);
  };

  return (
    <OperationForm type="transfer" formTitle="Transfer money">
      <Input
        ref={recepientInputRef}
        input={{
          type: 'text',
          className: `${classes['form__input']}`,
        }}
      />
      <Input
        ref={amountInputRef}
        input={{
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

const LoanOperation = props => {
  const loanAmountInputRef = useRef();
  const usersContext = useContext(UsersContext);

  const requestLoanHandler = event => {
    event.preventDefault();
    const loanAmount = +loanAmountInputRef.current.value;
    usersContext.requestLoan(loanAmount);
  };

  return (
    <OperationForm type="loan" formTitle="Request loan">
      <Input
        ref={loanAmountInputRef}
        input={{
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

const CloseAccOperation = props => {
  const usernameInputRef = useRef();
  const pinInputRef = useRef();
  const usersContext = useContext(UsersContext);

  const closeAccountHandler = event => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const pin = +pinInputRef.current.value;
    usersContext.closeAccount(username, pin);
  };

  return (
    <OperationForm type="close" formTitle="Close account">
      <Input
        ref={usernameInputRef}
        input={{
          type: 'text',
          className: `${classes['form__input']}`,
        }}
      />

      <Input
        ref={pinInputRef}
        input={{
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

const Operations = props => {
  return (
    <>
      <TransferOperation />
      <LoanOperation />
      <CloseAccOperation />
    </>
  );
};

export default Operations;
