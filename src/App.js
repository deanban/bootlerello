import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import styled from 'styled-components';

import List from './components/List';
import ActionButton from './components/ActionButton';
import { sortCard } from './actions';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEnd = result => {
    // console.log(this);

    //reorder after drag
    const { destination, source, draggableId } = result;

    //if destination is null, don't drop
    if (!destination) return;

    this.props.sortCard(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Welcome to Bootlerello.</h2>
          <Container>
            {lists.map(list => (
              <List
                key={list.id}
                listId={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <ActionButton list />
          </Container>
        </div>
      </DragDropContext>
    );
  }
}

//no longer using jss. delete
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row'
//   }
// };

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { sortCard }
)(App);
