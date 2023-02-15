import React, { useContext } from 'react';
import clsx from 'clsx';
import { BookContext, StoreInterface } from 'src/app/logic/store-book';

import styles from 'src/app/components/filter/FilterButton.module.scss';

/**
 * Filter button component
 */
export const FilterButton: React.FC = () => {
  const BUTTON_STYLES = clsx(styles.button);
  const SEARCH_OPEN_STYLES = clsx(styles.button, styles.search_open);

  const { isOpen }: StoreInterface = useContext(BookContext);

  return (
    <button className={isOpen ? SEARCH_OPEN_STYLES : BUTTON_STYLES} type='submit'>
      По рейтингу
    </button>
  );
};
