import { combineReducers } from 'redux';

import { booksReducer, selectedBooksReducer } from './books-reducer';

const reducers = combineReducers({
  allBooks: booksReducer,
  book: selectedBooksReducer,
});

export default reducers;
