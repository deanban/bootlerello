import React from 'react';

const Mainbar = ({ text }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '70%',
        overflow: 'hidden'
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
