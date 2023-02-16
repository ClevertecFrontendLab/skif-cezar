import React from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/loader/Loader.module.scss';

/**
 * Loader component
 */
export const Loader: React.FC = () => {
  const LOADER_STYLES = clsx(styles.loader);
  const MODAL_STYLES = clsx(styles.modal);

  return (
    <div className={MODAL_STYLES}>
      <span className={LOADER_STYLES}>Spinner</span>
    </div>
  );
};
