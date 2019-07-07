import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import styled from 'styled-components';

import List from './components/List';
import ActionButton from './components/ActionButton';
import { sortCardOrList } from './actions';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEnd = result => {
    // console.log(this);
    //reorder after drag
    const { destination, source, draggableId, type } = result;
    //if destination is null, don't drop
    if (!destination) return;

    this.props.sortCardOrList(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Welcome to Bootlerello.</h2>
          <Droppable droppableId="list" direction="horizontal" type="list">
            {provided => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {lists.map((list, index) => (
                  <List
                    key={list.id}
                    listId={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                <ActionButton list />
              </Container>
            )}
          </Droppable>
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
  { sortCardOrList }
)(App);
