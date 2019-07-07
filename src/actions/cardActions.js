import { CARD } from '../actions';

export const addCard = (listId, text) => {
  return {
    type: CARD.ADD_CARD,
    payload: { listId, text }
  };
};
