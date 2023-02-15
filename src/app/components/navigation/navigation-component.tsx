import React, { useContext } from 'react';
import clsx from 'clsx';
import { FilterButton } from 'src/app/components/filter/filter-button';
import { Search } from 'src/app/components/search/search-component';
import { BookContext, StoreInterface } from 'src/app/logic/store-book';

import styles from 'src/app/components/navigation/Navigation.module.scss';

/**
 * Navigation component
 */
export const Navigation: React.FC = () => {
  const NAVIGATION_STYLES = clsx(styles.navigation);
  const SEARCH_OPEN_STYLES = clsx(styles.navigation, styles.search_open);
  const BUTTON_WINDOW_STYLES = clsx(styles.button_window);
  const BUTTON_WINDOW_ACTIVE_STYLES = clsx(styles.button_window, styles.active);
  const BUTTON_LIST_STYLES = clsx(styles.button_list);
  const BUTTON_LIST_ACTIVE_STYLES = clsx(styles.button_list,styles.active);


  const { view, setView, isOpen }: StoreInterface = useContext(BookContext);

  const onClick = (userView: boolean): void => {
    setView(userView);
  };

  return (
    <div className={isOpen ? SEARCH_OPEN_STYLES : NAVIGATION_STYLES}>
      <Search />
      <FilterButton />
      <button
        className={view ? BUTTON_WINDOW_ACTIVE_STYLES : BUTTON_WINDOW_STYLES}
        onClick={() => onClick(true)}
        type='button'
        aria-label='Окно'
        data-test-id='button-menu-view-window'
      />
      <button
        className={view ? BUTTON_LIST_STYLES : BUTTON_LIST_ACTIVE_STYLES}
        onClick={() => onClick(false)}
        type='button'
        aria-label='Список'
        data-test-id='button-menu-view-list'
      />
    </div>
  );
};
