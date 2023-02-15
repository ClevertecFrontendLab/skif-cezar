import React, { useContext } from 'react';
import clsx from 'clsx';
import { Button } from 'src/app/components/button/button-component';
import { Rating } from 'src/app/components/rating/rating-component';
import { BooksInterface } from 'src/app/logic/content/content-component';
import { BookContext, StoreInterface } from 'src/app/logic/store-book';
import { HOST } from 'src/app/store/book-slice';
import bookNotUrl from 'src/resources/book-not.svg';

import styles from 'src/app/components/card/Card.module.scss';

/**
 * Card component
 */
export const Card: React.FC<BooksInterface> = (props: BooksInterface) => {
  const CARD_STYLES = clsx(styles.card);
  const IMG_STYLES = clsx(styles.image);
  const IMG_ERROR_STYLES = clsx(styles.image_error);
  const CONTENT_STYLES = clsx(styles.content);
  const RATING_STYLES = clsx(styles.rating);
  const TEXT_STYLES = clsx(styles.text);
  const TITLE_STYLES = clsx(styles.title);
  const AUTHOR_STYLES = clsx(styles.author);

  const CARD_LIST_STYLES = clsx(styles.card_list);
  const IMG_LIST_STYLES = clsx(styles.image_list);
  const CONTENT_LIST_STYLES = clsx(styles.content_list);
  const RATING_LIST_STYLES = clsx(styles.rating_list);
  const TEXT_LIST_STYLES = clsx(styles.text_list);
  const TITLE_LIST_STYLES = clsx(styles.title_list);
  const AUTHOR_LIST_STYLES = clsx(styles.author_list);

  const { view }: StoreInterface = useContext(BookContext);
  const bookImgUrl = (props.image !== null) ? `${HOST}${props.image.url}` : null;

  console.log(bookImgUrl);

  return (
    <div className={view ? CARD_STYLES : CARD_LIST_STYLES} data-test-id='card'>
      <div className={view ? IMG_STYLES : IMG_LIST_STYLES}>
        <img
          className={bookImgUrl ? undefined : IMG_ERROR_STYLES}
          alt={props.title}
          src={bookImgUrl ? bookImgUrl : bookNotUrl}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = bookNotUrl;
            e.currentTarget.classList.add(IMG_ERROR_STYLES);
          }}
        />
      </div>
      <div className={view ? CONTENT_STYLES : CONTENT_LIST_STYLES}>
        <div
          className={view ? RATING_STYLES : RATING_LIST_STYLES}
          onClick={(event) => event?.stopPropagation()}
          aria-hidden='true'
        >
          {props.rating === null ? 'ещё нет оценок' : <Rating ratingValue={props.rating} idValue={props.id} />}
        </div>
        <div className={view ? TEXT_STYLES : TEXT_LIST_STYLES}>
          <div className={view ? TITLE_STYLES : TITLE_LIST_STYLES}>
            <span>{props.title}</span>
          </div>
          <div className={view ? AUTHOR_STYLES : AUTHOR_LIST_STYLES}>{`${props.authors}, ${props.issueYear}`}</div>
        </div>
        <Button text={props.booking} />
      </div>
    </div>
  );
};
