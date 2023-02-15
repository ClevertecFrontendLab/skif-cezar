/* eslint-disable no-param-reassign */
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface State {
  books: [];
  status: string | null;
  error: string | undefined;
}

export const HOST = 'https://strapi.cleverland.by';
const BOOKS_URL = '/api/books';

const initialState: State = {
  status: null,
  books: [],
  error: '',
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios.get(`${HOST}${BOOKS_URL}`)
  .then((response) => response.data));

const bookSlice = createSlice({
    name: 'books',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = 'loading';
            state.error = '';
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
          state.status = 'resolved';
            state.books = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = 'loading';
            state.books = [];
            state.error = action.error.message;
        });
    },
    reducers: {}
});

// eslint-disable-next-line import/no-default-export
export default bookSlice.reducer;

