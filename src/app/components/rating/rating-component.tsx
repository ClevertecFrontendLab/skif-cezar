import React from 'react';
import clsx from 'clsx';
import { StarButton } from 'src/app/components/radio-button/star-button';

import styles from 'src/app/components/rating/Rating.module.scss';

/**
 * Rating interface
 */
interface RatingInterface {
  ratingValue: number | null;
  idValue: number;
}

/**
 * Rating component
 */
export const Rating: React.FC<RatingInterface> = (props: RatingInterface) => {
  const RATING_STYLES = clsx(styles.rating);

  const rating = props.ratingValue;
  const countStar = 5;

  const onClick = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className={RATING_STYLES} onClick={onClick} aria-hidden='true'>
      {Array.from(Array(5)).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <StarButton name={`rating-${props.idValue}`} value={i} key={props.idValue * i} />
      ))}
    </div>
  );
};
