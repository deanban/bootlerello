import React, { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import ActionButton from './components/ActionButton';

import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {
  onDragEnd = () => {
    console.log(this);
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Welcome to Bootlerello.</h2>
          <div style={styles.container}>
            {lists.map(list => (
              <List
                key={list.id}
                listId={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <ActionButton list />
          </div>
        </div>
      </DragDropContext>
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
