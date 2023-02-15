import React, { useContext } from 'react';
import clsx from 'clsx';
import { BookContext, StoreInterface } from 'src/app/logic/store-book';

import styles from 'src/app/components/search/Search.module.scss';

/**
 * Search component
 */
export const Search: React.FC = () => {
  const SEARCH_STYLES = clsx(styles.search);
  const SEARCH_ACTIVE_STYLES = clsx(styles.search, styles.search_active);
  const SEARCH_CLOSE_BUTTON_STYLES = clsx(styles.close);
  const SEARCH_INPUT_STYLES = clsx(styles.search_input);
  const SEARCH_BUTTON_STYLES = clsx(styles.search_button);

  const { isOpen, setIsOpen }: StoreInterface = useContext(BookContext);

  const toggleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <form className={isOpen ? SEARCH_ACTIVE_STYLES : SEARCH_STYLES}>
      <input
        className={SEARCH_INPUT_STYLES}
        type='text'
        placeholder='Поиск книги или автора...'
        data-test-id='input-search'
      />
      <button className={SEARCH_BUTTON_STYLES} type='submit' onClick={toggleSearch} data-test-id='button-search-open'>
        search
      </button>
      <button className={SEARCH_CLOSE_BUTTON_STYLES} type='submit' onClick={toggleSearch} data-test-id='button-search-close'>
        close
      </button>
    </form>
  );
};
