import React from 'react';
import ListCard from './ListCard';
import ActionButton from './ActionButton';
import { Droppable } from 'react-beautiful-dnd';

const List = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
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
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: '100%'
  }
};

export default List;
