import React, { Component } from 'react';
import { Icon, Card, Button } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';

import { addList, addCard } from '../actions';

class ActionButton extends Component {
  state = {
    open: false,
    text: ''
  };

  openForm = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  closeForm = e => {
    this.setState(({ open }) => ({ open: !open }));
  };

  handleAddList = () => {
    const { text } = this.state;

    if (text) {
      this.props.addList(text);
      this.setState({ text: '' });
    }
  };

  handleAddCard = () => {
    const { text } = this.state;
    const { listId } = this.props;

    // console.log(listId);

    if (text) {
      this.props.addCard(listId, text);
      this.setState({ text: '' });
    }
  };

  renderForm = () => {
    const { list } = this.props;

    const placeHolder = list
      ? 'Enter Title..'
      : 'Enter a title for this card..';

    const title = list ? 'Add List' : 'Add Card';

    return (
      <div>
        <Card
          style={{
            minHeight: 85,
            minWidth: 272,
            padding: '6px 8px 2px'
          }}
        >
          <Textarea
            placeholder={placeHolder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={e => {
              this.setState({ text: e.target.value });
            }}
            style={{
              resize: 'none',
              width: '100%',
              outline: 'none',
              border: 'none',
              overflow: 'hidden'
            }}
          />
        </Card>

        <div style={styles.formButtonGroup}>
          <Button
            // using onMouseDown cuz it fires before onBlur

            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{ color: 'white', backgroundColor: '#5aac44' }}
          >
            {title}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
        </div>
      </div>
    );
  };

  renderButton = () => {
    const { list } = this.props;

    const buttonText = list ? 'Add another list' : 'Add another card';
    const buttonOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBckgr = list ? 'rgba(0,0,0,.15)' : 'inherit';

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonOpacity,
          color: buttonTextColor,
          background: buttonTextBckgr
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  render() {
    return this.state.open ? this.renderForm() : this.renderButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center'
  }
};

export default connect(
  null,
  { addList, addCard }
)(ActionButton);
