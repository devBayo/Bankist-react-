import Input from '../../UI/Input';
import OperationForm from './OperationForm';
import classes from './Operations.module.css';

const TransferOperation = props => {
  return (
    <OperationForm type="transfer" formTitle="Transfer money">
      <Input
        input={{
          type: 'text',
          className: `${classes['form__input']}`,
        }}
      />
      <Input
        input={{
          type: 'number',
          className: `${classes['form__input']}`,
        }}
      />
      <button className={classes['form__btn']}>&rarr;</button>
      <label className={classes['form__label']}>Transfer to</label>
      <label className={classes['form__label']}>Amount</label>
    </OperationForm>
  );
};

const LoanOperation = props => {
  return (
    <OperationForm type="loan" formTitle="Request loan">
      <Input
        input={{
          type: 'number',
          className: `${classes['form__input']}`,
        }}
      />
      <button className={`${classes['form__btn']}`}>&rarr;</button>
      <label></label>
      <label className={`${classes['form__label']}`}>Amount</label>
    </OperationForm>
  );
};

const CloseAccOperation = props => {
  return (
    <OperationForm type="close" formTitle="Close account">
      <Input
        input={{
          type: 'text',
          className: `${classes['form__input']}`,
        }}
      />

      <Input
        input={{
          type: 'password',
          maxlength: '6',
          className: `${classes['form__input']}`,
        }}
      />

      <button className={`${classes['form__btn']}`}>&rarr;</button>
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
