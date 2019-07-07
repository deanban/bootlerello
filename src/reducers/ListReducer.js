import { CARD, LIST } from '../actions';

const uuidv4 = require('uuid/v4');

const initialState = [
  {
    title: 'Last',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe.'
      },
      {
        id: uuidv4(),
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolore quas dolores vel veniam sunt accusantium enim, aut sapiente ipsum.`
      }
    ]
  },
  {
    title: 'Now',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe.'
      },
      {
        id: uuidv4(),
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolore quas dolores vel veniam sunt accusantium enim, aut sapiente ipsum.`
      },
      {
        id: uuidv4(),
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ut ab pariatur distinctio ducimus quis!`
      }
    ]
  }
];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST.ADD_LIST:
      return [
        ...state,
        {
          title: action.payload,
          cards: [],
          id: uuidv4()
        }
      ];

    case CARD.ADD_CARD:
      const newCard = {
        id: uuidv4(),
        text: action.payload.text
      };
      // const list = state.filter(item => item.id === action.payload.listId);

      // return list[0].cards.concat(newCard);

      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;

    default:
      return state;
  }
};

export default ListReducer;
