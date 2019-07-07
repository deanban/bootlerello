import { CARD, DND } from '../actions';

export const addCard = (listId, text) => {
  return {
    type: CARD.ADD_CARD,
    payload: { listId, text }
  };
};

export const sortCardOrList = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: DND.ON_DND,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
