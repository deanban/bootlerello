import React from 'react';
import { Icon } from '@material-ui/core';

const Button = ({ onClose }) => {
  return (
    <button
      style={{
        position: 'absolute',
        backgroundColor: 'transparent',

        right: '1rem',

        top: '1rem',
        border: '0',
        cursor: 'pointer',
        outline: '0',
        color: '#47525d',
        zIndex: '1999'
      }}
    >
      <Icon onClick={onClose}>close</Icon>
    </button>
  );
};

export default Button;
