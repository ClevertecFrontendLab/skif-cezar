import React, { useState } from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/radio-button/StarButton.module.scss';

/**
 * StarButton interface
 */
interface StarButtonInterface {
  name: string;
  value: number;
}

/**
 * StarButton component
 */
export const StarButton: React.FC<StarButtonInterface> = (props: StarButtonInterface) => {
  const INPUT_STYLES = clsx(styles.input);
  const LABEL_STYLES = clsx(styles.label);

  const [checked, setChecked] = useState('1');

  const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        className={INPUT_STYLES}
        type='radio'
        name={props.name}
        value={props.value}
        checked={checked === `${props.value}` ? true : false}
        onChange={changeCheckbox}
      />
      <label className={LABEL_STYLES} htmlFor={`${props.value}`}>
        {props.value}
      </label>
    </React.Fragment>
  );
};
