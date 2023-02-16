import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Card } from 'src/app/components/card/card-component';
import { Error } from 'src/app/components/error/error';
import { Loader } from 'src/app/components/loader/loader';
import { Navigation } from 'src/app/components/navigation/navigation-component';
import { BookContext, StoreInterface } from 'src/app/logic/store-book';
import { fetchBooks } from 'src/app/store/book-slice';
import { AppDispatch } from 'src/app/store/store';

import styles from 'src/app/logic/content/Content.module.scss';

/**
 * Books interface
 */
export interface BooksInterface {
  issueYear: string;
  rating: number | null;
  title: string;
  authors: string[];
  image: { [key: string]: string } | null;
  categories?: string[];
  id: number;
  booking: { [key: string]: any } | null;
  delivery?: null;
  histories?: [] | null;
}

/**
 * Content window component
 */
export const Content: React.FC = () => {
  const CONTAINER_STYLES = clsx(styles.container);
  const CONTAINER_LIST_STYLES = clsx(styles.container_list);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);

  const { view }: StoreInterface = useContext(BookContext);
  const { category } = useParams();

  const { status, error } = useSelector((state: any) => state.books);
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: any) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (error !== '') {
    return <Error />;
  }
  if (status === 'loading' && error === '') {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Navigation />
      <section className={view ? CONTAINER_STYLES : CONTAINER_LIST_STYLES}>
        <h2 className={TITLE_HIDDEN_STYLES}>Витрина книг</h2>
        {books &&
          books.map((book: BooksInterface) => (
            <NavLink to={`/books/${category}/${book.id}`} key={book.id}>
              <Card
                id={book.id}
                title={book.title}
                authors={book.authors}
                issueYear={book.issueYear}
                image={book.image}
                rating={book.rating}
                booking={book.booking}
              />
            </NavLink>
          ))}
      </section>
    </React.Fragment>
  );

  /* return (
    <React.Fragment>
      {status === 'loading' && error === '' ? <Loader /> : <Error />}
      <Navigation />
      <section className={view ? CONTAINER_STYLES : CONTAINER_LIST_STYLES}>
        <h2 className={TITLE_HIDDEN_STYLES}>Витрина книг</h2>
        {books &&
          books.map((book: BooksInterface) => (
            <NavLink to={`/books/${category}/${book.id}`} key={book.id}>
              <Card
                id={book.id}
                title={book.title}
                authors={book.authors}
                issueYear={book.issueYear}
                image={book.image}
                rating={book.rating}
                booking={book.booking}
              />
            </NavLink>
          ))}
      </section>
    </React.Fragment>
  ); */
};
