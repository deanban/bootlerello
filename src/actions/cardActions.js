import { CARD } from '../actions';

export const addCard = (listId, text) => {
  return {
    type: CARD.ADD_CARD,
    payload: { listId, text }
  };
};

export const sortCard = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: CARD.ON_DRAG,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  };
};
