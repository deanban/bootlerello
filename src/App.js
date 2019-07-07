import React, { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import ActionButton from './components/ActionButton';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div>
        <h2>Welcome to Bootlerello.</h2>
        <div style={styles.container}>
          {lists.map(list => (
            <List key={list.id} title={list.title} cards={list.cards} />
          ))}
          <ActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
