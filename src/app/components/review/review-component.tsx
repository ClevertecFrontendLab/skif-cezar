import React from 'react';
import clsx from 'clsx';
import { Rating } from 'src/app/components/rating/rating-component';
import avatarUrl from 'src/resources/avatar-reviews.jpg';
import bookNotUrl from 'src/resources/book-not.svg';

import styles from 'src/app/components/review/Review.module.scss';

/**
 * Review interface
 */
interface ReviewInterface {
  name: string;
  date: string;
  feedback?: string;
}

/**
 * Review component
 */
export const Review: React.FC<ReviewInterface> = (props: ReviewInterface) => {
  const REVIEW_STYLES = clsx(styles.review);
  const HEADER_STYLES = clsx(styles.header);
  const AVATAR_STYLES = clsx(styles.avatar);
  const USER_NAME_STYLES = clsx(styles.name);
  const DATE_STYLES = clsx(styles.date);
  const FEEDBACK_STYLES = clsx(styles.feedback);
  const RATING_STYLES = clsx(styles.rating);

  return (
    <article className={REVIEW_STYLES}>
      <div className={HEADER_STYLES}>
        <div className={AVATAR_STYLES}>
          <img
            alt={props.name}
            src={avatarUrl}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = bookNotUrl;
            }}
          />
        </div>
        <div className={USER_NAME_STYLES}>
          <span>{props.name}</span>
        </div>
        <div className={DATE_STYLES}>
          <time dateTime='2019-01-05'>{props.date}</time>
        </div>
      </div>
      <div className={RATING_STYLES}>
        <Rating ratingValue='4' idValue={4} />
      </div>
      <div className={FEEDBACK_STYLES}>
        <p>{props.feedback}</p>
      </div>
    </article>
  );
};
