import React from 'react';

const Input = props => {
  const { onchange, value } = props;
  return (
    <div>
      <input onChange={onchange} value={value} />;
    </div>
  );
};

export default Input;
