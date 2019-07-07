import { CARD, LIST, DND } from '../actions';

const uuidv4 = require('uuid/v4');

const initialState = [
  {
    title: 'To Do',
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
        text: `Lorem ipsum dolor sit amet consectetur.`
      },
      {
        id: uuidv4(),
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem unde optio!`
      },
      {
        id: uuidv4(),
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, sequi!`
      }
    ]
  },
  {
    title: 'In Progress',
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
  },
  {
    title: 'Done',
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
      },
      {
        id: uuidv4(),
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
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

    case CARD.ADD_CARD: {
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
    }

    case DND.ON_DND:
      const newState = [...state];

      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;

      //dnd of a list
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      //dnd in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //dnd between lists
      if (droppableIdStart !== droppableIdEnd) {
        const sourceList = state.find(list => droppableIdStart === list.id);
        const card = sourceList.cards.splice(droppableIndexStart, 1);

        const destinationList = state.find(list => droppableIdEnd === list.id);

        destinationList.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default ListReducer;
