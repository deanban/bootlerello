import React from 'react';
import Button from './Button';

const Toolbar = () => {
  return (
    <div
      style={{
        width: '25%',
        height: '50px',
        position: 'absolute',
        left: '0',
        zIndex: '999'
      }}
    >
      <Button />
    </div>
  );
};

export default Toolbar;
