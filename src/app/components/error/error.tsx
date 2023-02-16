import React, {useState} from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/error/Error.module.scss';

/**
 * Error component
 */
export const Error: React.FC = () => {
  const ERROR_STYLES = clsx(styles.error);
  const ERROR_NON_STYLES = clsx(styles.error, styles.error_none);
  const CONTAINER_STYLES = clsx(styles.container);
  const ERROR_CLOSE_BUTTON_STYLES = clsx(styles.close);

  const [isOpenError, setIsOpenError] = useState(true);

  const closeError = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpenError(false);
  };

  return (
    <div className={isOpenError ? ERROR_STYLES : ERROR_NON_STYLES}>
      <div className={CONTAINER_STYLES}>
        <span>внимание</span>
        <p>Что-то пошло не так. Обновите страницу через некоторое время.</p>
        <button className={ERROR_CLOSE_BUTTON_STYLES} type='submit' onClick={closeError}>
          close
        </button>
      </div>
    </div>
  );
};
