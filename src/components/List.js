import React from 'react';
import ListCard from './ListCard';

const List = props => {
  return (
    <div style={styles.container}>
      <h4>{props.title}</h4>
      <ListCard />
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
