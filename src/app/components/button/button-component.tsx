import React, { useState } from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/button/Button.module.scss';

/**
 * Button interface
 */
interface ButtonInterface {
  text: { [key: string]: any; } | null;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonInterface> = (props: ButtonInterface) => {
  const BUTTON_STYLES = clsx(styles.button);
  const BUTTON_ACTIVE_STYLES = clsx(styles.active);
  const BUTTON_BOOKED_STYLES = clsx(styles.booked);

  const [isOnToggle, setIsOnToggle] = useState(true);
  const [isBooked, setIsBooked] = useState('Забронировать');

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsOnToggle(!isOnToggle);

    if (!isOnToggle) {
      setIsBooked('Забронировать');
    } else if (isOnToggle) {
      setIsBooked('Забронирована');
    }
  };

  const isBooking = (booking: object | null) => {
    if (booking === null) {
      if (isOnToggle) {
        return BUTTON_STYLES;
      }

      return BUTTON_ACTIVE_STYLES;
    }

    return BUTTON_BOOKED_STYLES;
  };

  return (
    <button className={isBooking(props.text)} onClick={onClick} type='button'>
      {props.text === null ? isBooked : `Занята до ${props.text.dateOrder}`}
    </button>
  );
};
