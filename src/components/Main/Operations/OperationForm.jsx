import classes from './OperationForm.module.css';

const OperationForm = props => {
  return (
    <div
      className={`${classes['operation']} ${
        classes[`operation--${props.type}`]
      }`}
    >
      <h2>{props.formTitle}</h2>
      <form className={`${classes['form']} ${classes[`form--${props.type}`]}`}>
        {props.children}
      </form>
    </div>
  );
};

export default OperationForm;
