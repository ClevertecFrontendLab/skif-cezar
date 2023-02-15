import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react';

/**
 * Store interface
 */
export interface StoreInterface {
  /**
   * Content display view
   */
  view: boolean;

  /**
   * Set content display view
   */
  setView: Dispatch<SetStateAction<boolean>>;

  /**
   * Toggle menu
   */
  nav: boolean;

  /**
   * Set toggle menu
   */
  setNav: Dispatch<SetStateAction<boolean>>;

  /**
   * Toggle search
   */
  isOpen: boolean;

  /**
   * Set toggle search
   */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Store for book store
 */
export const useBookStore = (): StoreInterface => {
  const [view, setView] = useState<boolean>(true);
  const [nav, setNav] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return {
    view,
    setView,
    nav,
    setNav,
    isOpen,
    setIsOpen,
  };
};

/**
 * Provide access to BookStore
 */
export const BookContext = createContext({} as StoreInterface);

/**
 * Provider for book store
 */
export const BookProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => (
  <BookContext.Provider value={useBookStore()}>{props.children}</BookContext.Provider>
);
