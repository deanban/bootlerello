import { LIST } from '../actions';

export const addList = title => {
  // console.log(title);
  return {
    type: LIST.ADD_LIST,
    payload: title
  };
};
