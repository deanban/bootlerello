import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import List from './components/List';
import ActionButton from './components/ActionButton';
import { sortCardOrList } from './actions';
import Appbar from './components/Appbar';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props =>
      props.theme.mode === 'dark' ? '#203A43' : '#eee'};
    color: ${props => (props.theme.mode === 'dark' ? '#EEE' : '#203A43')};

  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 7vh;
  color: #2c3e50;
`;

class App extends Component {
  state = { mode: 'dark' };

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
      <ThemeProvider theme={this.state}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <GlobalStyle />
          <Appbar
            theme={() =>
              this.setState(({ mode }) =>
                mode === 'light'
                  ? this.setState({ mode: 'dark' })
                  : this.setState({ mode: 'light' })
              )
            }
          />
          {/* {console.log(this.state)} */}
          <div>
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
      </ThemeProvider>
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
