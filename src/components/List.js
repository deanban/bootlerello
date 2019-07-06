import React from 'react';
import ListCard from './ListCard';

const List = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <ListCard text={card.text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 8
  }
};

export default List;
