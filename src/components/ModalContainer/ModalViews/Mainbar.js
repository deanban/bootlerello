import React from 'react';

const Mainbar = ({ text }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        minWidth: '70%',
        overflow: 'auto'
      }}
    >
      <div
        style={{
          position: 'relative',
          top: '2rem',
          left: '8px'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Mainbar;
