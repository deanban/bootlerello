import React from 'react';
import Button from './Button';

const Toolbar = ({ onClose }) => {
  return (
    <div
      style={{
        width: '25%',
        height: '50px',
        position: 'absolute',
        marginleft: '0',

        zIndex: '999'
      }}
    >
      <Button onClose={onClose} />
    </div>
  );
};

export default Toolbar;
