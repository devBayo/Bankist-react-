import React from 'react';
const Input = ({ input, onChange }) => {
  return <input onChange={onChange} {...input} />;
};

export default Input;
