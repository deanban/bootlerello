import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from '@material-ui/core';

import Mainbar from './ModalViews/Mainbar';
import Sidebar from './ModalViews/Sidebar';
import Toolbar from './ModalViews/Toolbar';

const Modal = ({ onClose, text }) => {
  const portalRoot = document.getElementById('portal');

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
          <Toolbar onClose={onClose} />
          <Sidebar />
          <Mainbar text={text} />
        </Card>
      </div>
    );
  };

  return ReactDOM.createPortal(portal(), portalRoot);
};

export default Modal;
