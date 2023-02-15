import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { BookContext, StoreInterface } from 'src/app/logic/store-book';
import avatarSrc from 'src/resources/avatar.jpg';
import logoSrc from 'src/resources/logo.png';

import styles from 'src/app/components/header/Header.module.scss';

/**
 * Header component
 */
export const Header: React.FC = () => {
  const HEADER_STYLES = clsx(styles.header);
  const LOGO_STYLES = clsx(styles.logo);
  const BURGER_MENU_STYLES = clsx(styles.burger_menu);
  const BURGER_MENU_ACTIVE_STYLES = clsx(styles.burger_menu, styles.burger_active);
  const TITLE_STYLES = clsx(styles.title);
  const AUTHORIZATION_STYLES = clsx(styles.authorization);
  const WELCOME_STYLES = clsx(styles.welcome);
  const AVATAR_STYLES = clsx(styles.avatar);

  const { nav, setNav }: StoreInterface = useContext(BookContext);

  const toggleMenu = (): void => {
    setNav(!nav);
  };

  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!burgerRef.current) return;

      if (!burgerRef.current.contains(e.target)) {
        setNav(true);
      }
    };

    window.addEventListener('click', handleClick, { capture: true });

    return () => {
      window.removeEventListener('click', handleClick, { capture: true });
    };
  }, [burgerRef, setNav]);

  return (
    <header className={HEADER_STYLES}>
      <NavLink to='/' className={LOGO_STYLES}>
        <img src={logoSrc} alt='Логотип сайта Cleverland' width={165} height={40} />
      </NavLink>
      <button
        ref={burgerRef}
        className={nav ? BURGER_MENU_STYLES : BURGER_MENU_ACTIVE_STYLES}
        type='button'
        onClick={toggleMenu}
        data-test-id='button-burger'
      >
        <span>line 1</span>
        <span>line 2</span>
        <span>line 3</span>
      </button>
      <h1 className={TITLE_STYLES}>Библиотека</h1>
      <div className={AUTHORIZATION_STYLES}>
        <span className={WELCOME_STYLES}>Привет, Иван!</span>
        <img className={AVATAR_STYLES} src={avatarSrc} alt='Аватар пользователя' width={58} height={58} />
      </div>
    </header>
  );
};
