import React from 'react';
import ListCard from './ListCard';
import ActionButton from './ActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  background: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin-right: 8px;
  height: 100%;
`;

const List = ({ title, cards, listId, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listId)}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <ListCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    cardId={card.id}
                  />
                ))}
                <ActionButton listId={listId} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

//No longer using jss. delete
// const styles = {
//   container: {
//     backgroundColor: '#dfe3e6',
//     borderRadius: 3,
//     width: 300,
//     padding: 8,
//     marginRight: 8,
//     height: '100%'
//   }
// };

export default List;
