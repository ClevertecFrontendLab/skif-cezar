import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { CONTRACT_PAGE_URL } from 'src/app/logic/pages/contract/contract-page';
import { TERMS_PAGE_URL } from 'src/app/logic/pages/terms/terms-page';
import { BookContext, StoreInterface } from 'src/app/logic/store-book';
import MenuListDTO from 'src/app/MenuList.json';

import styles from 'src/app/components/menu/Menu.module.scss';

/**
 * Interface menu list
 */
export interface MenuListInterface {
  id: number;
  title: string;
  amount?: number;
  category: string;
}

/**
 * Menu component
 */
export const Menu: React.FC = () => {
  const MENU_STYLES = clsx(styles.menu);
  const MENU_OPEN_STYLES = clsx(styles.menu, styles.menu_open);
  const LIST_STYLES = clsx(styles.list);
  const ITEM_STYLES = clsx(styles.item);
  const ACTIVE_LINK_STYLES = clsx(styles.active);
  const SUB_LIST_STYLES = clsx(styles.sub_list);
  const SUB_LIST_CLOSE_STYLES = clsx(styles.sub_list, styles.sub_list_close);
  const SUB_ITEM_STYLES = clsx(styles.sub_item);
  const SUB_LINK_STYLES = clsx(styles.sub_link);
  const ACTIVE_SUB_LINK_STYLES = clsx(styles.active_sub_link);
  const BUTTON_OPEN_STYLES = clsx(styles.button_menu);
  const BUTTON_CLOSE_STYLES = clsx(styles.button_menu, styles.button_close);

  const { nav, setNav }: StoreInterface = useContext(BookContext);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSubMenu = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    setNav(false);
  };

  return (
    <nav className={nav ? MENU_STYLES : MENU_OPEN_STYLES} aria-hidden='true' data-test-id='burger-navigation'
    onClick={() => {
      setNav(false);
    }}>
      <ul className={LIST_STYLES}>
        <li className={ITEM_STYLES}>
          <NavLink
            to='/books/all'
            className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}
            data-test-id={window.innerWidth <= 992 ? 'burger-showcase' : 'navigation-showcase'}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Витрина книг
          </NavLink>
          <button className={isOpen ? BUTTON_OPEN_STYLES : BUTTON_CLOSE_STYLES} type='button' onClick={toggleSubMenu}>
            Свернуть комментарии
          </button>
        </li>
        <ul className={isOpen ? SUB_LIST_STYLES : SUB_LIST_CLOSE_STYLES}>
          {MenuListDTO &&
            MenuListDTO.map((list: MenuListInterface) => (
              <li key={list.id} className={SUB_ITEM_STYLES}>
                <NavLink
                  to={`/books/${list.category}`}
                  className={({ isActive }) => (isActive ? ACTIVE_SUB_LINK_STYLES : SUB_LINK_STYLES)}
                  data-test-id={list.id === 1 && (window.innerWidth <= 992 ? 'burger-books' : 'navigation-books')}
                >
                  <span>{list.title}</span>
                  &nbsp;<small>{list.amount}</small>
                </NavLink>
              </li>
            ))}
        </ul>
        <li className={ITEM_STYLES}>
          <NavLink
            to={TERMS_PAGE_URL}
            className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}
            data-test-id={window.innerWidth <= 992 ? 'burger-terms' : 'navigation-terms'}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Правила пользования
          </NavLink>
        </li>
        <li className={ITEM_STYLES}>
          <NavLink
            to={CONTRACT_PAGE_URL}
            className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}
            data-test-id={window.innerWidth <= 992 ? 'burger-contract' : 'navigation-contract'}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Договор оферты
          </NavLink>
        </li>
      </ul>
      <ul className={LIST_STYLES}>
        <li className={ITEM_STYLES}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Профиль
          </NavLink>
        </li>
        <li className={ITEM_STYLES}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Выход
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
