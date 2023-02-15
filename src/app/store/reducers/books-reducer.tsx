import { ActionTypes } from '../constants/action-types';

const intialState = {
  books: {},
};

export const booksReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export const selectedBooksReducer = (state = {}, action: any) => {
  console.log(action.type);
  switch (action.type) {
    case ActionTypes.SELECTED_BOOK:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_BOOK:
      return {};
    default:
      return state;
  }
};
