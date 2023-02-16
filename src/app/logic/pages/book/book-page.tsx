import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import { bookImages } from 'src/app/books-img';
import { Button } from 'src/app/components/button/button-component';
import { Header } from 'src/app/components/header/header-component';
import { Menu, MenuListInterface } from 'src/app/components/menu/menu-component';
import { Rating } from 'src/app/components/rating/rating-component';
import { Review } from 'src/app/components/review/review-component';
import { Slider } from 'src/app/components/slider/slider';
import { BooksInterface } from 'src/app/logic/content/content-component';
import { Footer } from 'src/app/logic/footer/footer-component';
import MenuListDTO from 'src/app/MenuList.json';
import { removeSelectedBook, selectedBook } from 'src/app/store/actions/books-actions';

import styles from 'src/app/logic/pages/book/BookPage.module.scss';

export const BOOK_PAGE_URL = '/books/:category/:bookId';

/**
 * Book page component
 */
export const BookPage: React.FC = () => {
  const HOST = 'https://strapi.cleverland.by';
  const BOOKS_URL = '/api/books';
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const MAIN_STYLES = clsx(styles.main);
  const NAVIGATION_STYLES = clsx(styles.navigation);
  const BOOK_CONTAINER_STYLES = clsx(styles.container);
  const PROMO_STYLES = clsx(styles.promo);
  const BOOK_INFORMATION_STYLES = clsx(styles.information);
  const TITLE_BOOK_STYLES = clsx(styles.title);
  const AUTHOR_STYLES = clsx(styles.author);
  const IMG_CONTAINER_STYLES = clsx(styles.image);
  const DESCRIPTION_STYLES = clsx(styles.description);
  const DESCRIPTION_TITLE_STYLES = clsx(styles.description_title);
  const BUTTON_OPEN_STYLES = clsx(styles.button_comments);
  const BUTTON_CLOSE_STYLES = clsx(styles.button_comments, styles.button_close);
  const RATING_STYLES = clsx(styles.rating);
  const RATING_CONTENT_STYLES = clsx(styles.rating_content);
  const DETAILS_STYLES = clsx(styles.details);
  const DETAILS_CONTAINER = clsx(styles.details_container);
  const GROUP_ONE = clsx(styles.group_one);
  const GROUP_TWO = clsx(styles.group_two);
  const REVIEWS_STYLES = clsx(styles.reviews);
  const COMMENTS_OPEN_STYLES = clsx(styles.comments_open);
  const COMMENTS_CLOSE_STYLES = clsx(styles.comments_close);

  const { category } = useParams();
  const { bookId } = useParams();
  const dispatch = useDispatch();

  const fetchBookDetail = async () => {
    const response = await axios.get(`${HOST}${BOOKS_URL}${bookId}`).catch((error) => {
      console.log('Error', error);
    });

    dispatch(selectedBook(response?.data));
  };

  useEffect(() => {
    if (bookId && bookId !== '') fetchBookDetail();

    return () => {
      dispatch(removeSelectedBook());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const book = BooksDTO.find((book: BooksInterface) => book.id === parseInt(bookId!, 10));
  const menuItem = MenuListDTO.find((menuItem: MenuListInterface) => menuItem.category === category);
  const bookImg = bookImages[parseInt(bookId!, 10) - 1];

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleComments = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <Menu />
      <main className={MAIN_STYLES}>
        <div className={NAVIGATION_STYLES}>
          <nav>
            <ul>
              <li>
                <NavLink to={`/books/${category}`}>{menuItem!.title}</NavLink>
              </li>
              <li>
                <NavLink to={`/books/${category}/${book!.id}`}>{book!.title}</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <section className={BOOK_CONTAINER_STYLES}>
          <article className={PROMO_STYLES}>
            <div className={IMG_CONTAINER_STYLES}>
              <Slider title={book!.title} bookImages={bookImg} />
            </div>

            <div className={BOOK_INFORMATION_STYLES}>
              <div>
                <div className={TITLE_BOOK_STYLES}>
                  <span>{book!.title}</span>
                </div>
                <div className={AUTHOR_STYLES}>{`${book!.author}, ${book!.year}`}</div>
              </div>
              <Button text='' />
            </div>
            <div className={DESCRIPTION_STYLES}>
              <h3 className={DESCRIPTION_TITLE_STYLES}>О книге</h3>
              <p>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
                грокать алгоритмы — это веселое и увлекательное занятие.
              </p>
            </div>
          </article>
          <article className={RATING_STYLES}>
            <h3 className={DESCRIPTION_TITLE_STYLES}>Рейтинг</h3>
            <div className={RATING_CONTENT_STYLES}>
              <Rating ratingValue={book!.rating} idValue={book!.id} />
              <span>4.3</span>
            </div>
          </article>
          <article className={DETAILS_STYLES}>
            <h3 className={DESCRIPTION_TITLE_STYLES}>Подробная информация</h3>
            <div className={DETAILS_CONTAINER}>
              <div className={GROUP_ONE}>
                <div>
                  <h4>Издательство</h4>
                  <p>Питер</p>
                </div>
                <div>
                  <h4>Год издания</h4>
                  <p>2019</p>
                </div>
                <div>
                  <h4>Страниц</h4>
                  <p>288</p>
                </div>
                <div>
                  <h4>Переплёт</h4>
                  <p>Мягкая обложка</p>
                </div>
                <div>
                  <h4>Формат</h4>
                  <p>70&#9747;100</p>
                </div>
              </div>
              <div className={GROUP_TWO}>
                <div>
                  <h4>Жанр</h4>
                  <p>Компьютерная литература</p>
                </div>
                <div>
                  <h4>Вес</h4>
                  <p>370г</p>
                </div>
                <div>
                  <h4>ISBN</h4>
                  <p>978-5-4461-0923-4</p>
                </div>
                <div>
                  <h4>Изготовитель</h4>
                  <p>&laquo;Питер Мейл&raquo;. РФ, 198206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</p>
                </div>
              </div>
            </div>
          </article>
          <article className={REVIEWS_STYLES}>
            <h3 className={DESCRIPTION_TITLE_STYLES}>
              Отзывы<span>2</span>
            </h3>
            <button
              className={isOpen ? BUTTON_OPEN_STYLES : BUTTON_CLOSE_STYLES}
              type='button'
              onClick={toggleComments}
              data-test-id='button-hide-reviews'
            >
              Свернуть комментарии
            </button>
            <article className={isOpen ? COMMENTS_OPEN_STYLES : COMMENTS_CLOSE_STYLES}>
              <Review name='Иван Иванов' date='5 января 2019' />
              <Review
                name='Николай Качков'
                date='20 июня 2018'
                feedback='Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса
          для анализа существующих паттернов поведения. Для современного мира внедрение современных методик
          предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже
          неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами
          себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для
          своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные
          исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу
          обществу.'
              />
              <Review name='Екатерина Беляева' date='18 февраля 2018' />
            </article>
            <button type='button' data-test-id='button-rating'>
              Оценить книгу
            </button>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};
