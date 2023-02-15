import { ActionTypes } from 'src/app/store/constants/action-types';

/**
 * Books interface
 */
interface BooksInterface {
  issueYear: string;
  rating: number | null;
  title: string;
  authors: string[];
  image: object;
  url: string;
  categories: string[];
  id: number;
  booking: null;
  delivery: null;
  histories: [] | null;
}

/**
 * Book interface
 */
export interface BookInterface {
  id: number;
  title: string;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: string[];
  categories: string[];
  comments: null;
  booking: null;
  delivery: null;
  histories: [] | null;
}

export const setBooks = (books: BooksInterface) => ({
  type: ActionTypes.SET_BOOKS,
  payload: books,
});

export const selectedBook = (book: BookInterface) => ({
  type: ActionTypes.SELECTED_BOOK,
  payload: book,
});
export const removeSelectedBook = () => ({
  type: ActionTypes.REMOVE_SELECTED_BOOK,
});
