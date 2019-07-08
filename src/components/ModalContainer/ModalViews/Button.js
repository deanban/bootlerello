import React from 'react';
import { Icon } from '@material-ui/core';

const Button = () => {
  return (
    <button
      style={{
        position: 'absolute',
        backgroundColor: 'transparent',

        left: '1rem',

        top: '2rem',
        border: '0',
        cursor: 'pointer',
        outline: '0',
        color: '#47525d',
        zIndex: '1999'
      }}
    >
      <Icon style={{ marginRight: '10px' }}>edit</Icon>
      <Icon>fullscreen</Icon>
    </button>
  );
};

export default Button;
