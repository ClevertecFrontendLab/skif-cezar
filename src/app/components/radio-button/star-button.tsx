import React, { useState } from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/radio-button/StarButton.module.scss';

/**
 * StarButton interface
 */
interface StarButtonInterface {
  name: string;
  value: number;
  checked: number;
}

/**
 * StarButton component
 */
export const StarButton: React.FC<StarButtonInterface> = (props: StarButtonInterface) => {
  const INPUT_STYLES = clsx(styles.input);
  const LABEL_STYLES = clsx(styles.label);

  const [checked, setChecked] = useState<number>(props.checked);

  const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(parseInt(event.target.value, 10));
    console.log(parseInt(event.target.value, 10));
  };

  return (
    <React.Fragment>
      <input
        id={`${props.value}`}
        className={INPUT_STYLES}
        type='radio'
        name={props.name}
        value={props.value}
        checked={checked === props.value ? true : false}
        onChange={changeCheckbox}
      />
      <label className={LABEL_STYLES} htmlFor={`${props.value}`}>
        {props.value}
      </label>
    </React.Fragment>
  );
};
