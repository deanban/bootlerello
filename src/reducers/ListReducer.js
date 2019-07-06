const initialState = [
  {
    title: 'Last',
    id: 0,
    cards: [
      {
        id: 0,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe.'
      },
      {
        id: 1,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolore quas dolores vel veniam sunt accusantium enim, aut sapiente ipsum.`
      }
    ]
  },
  {
    title: 'Now',
    id: 1,
    cards: [
      {
        id: 0,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe.'
      },
      {
        id: 1,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolore quas dolores vel veniam sunt accusantium enim, aut sapiente ipsum.`
      }
    ]
  }
];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListReducer;
