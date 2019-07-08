import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon } from '@material-ui/core';

const Modal = ({ onClose, children }) => {
  const portalRoot = document.getElementById('portal');

  const modalButton = () => {
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
        <Icon>close</Icon>
      </button>
    );
  };

  const modalToolbar = () => {
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
        {modalButton()}
      </div>
    );
  };

  const modalSidebar = () => {
    return (
      <div
        style={{
          position: 'relative',
          width: '30%',
          backgroundColor: '#f5f5f5',
          borderRadius: '0 .25rem .25rem 0',
          padding: '60px 1.5rem 1.5rem'
        }}
      >
        <div
          style={{
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          Hello
        </div>
      </div>
    );
  };

  const modalMainbar = () => {
    return (
      <div
        style={{
          display: 'inline-block',
          minWidth: '70%',
          overflow: 'auto'
        }}
      >
        {children}
      </div>
    );
  };

  const portal = () => {
    return (
      <div
        style={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1001,
          opacity: 1
        }}
        onClick={onClose}
      >
        <Card
          style={{
            display: 'flex',
            width: '80%',
            margin: '100px auto 0',
            position: 'relative',
            minHeight: '70vh'
          }}
        >
          {modalToolbar()}
          {modalSidebar()}
          {modalMainbar()}
        </Card>
      </div>
    );
  };

  return ReactDOM.createPortal(portal(), portalRoot);
};

export default Modal;
