import React, { useState } from 'react';
import clsx from 'clsx';
import bookNotUrl from 'src/resources/book-not.svg';
// eslint-disable-next-line import/no-extraneous-dependencies
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';

import 'src/app/components/slider/Slider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/thumbs/thumbs.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
import styles from 'src/app/logic/pages/book/BookPage.module.scss';
/*
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import 'swiper/scss/scrollbar';
import 'swiper/scss/pagination';
import 'swiper/css/effect-cube';
*/
SwiperCore.use([EffectCoverflow, Navigation, Pagination, Scrollbar, Thumbs]);

/**
 * Slider interface
 */
interface SliderInterface {
  title: string;
  bookImages: any;
}

/**
 * Slider component
 */
export const Slider: React.FC<SliderInterface> = (props: SliderInterface) => {
  const IMG_STYLES = clsx(styles.image);
  const IMG_ERROR_STYLES = clsx(styles.image, styles.image_error);
  const SMALL_SWIPER_NONE_STYLES = 'smallSwiper-none';

  const countImgs = props.bookImages.images.length;

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <React.Fragment>
      <Swiper
        data-test-id='slide-big'
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        effect='cube'
        watchSlidesProgress={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        breakpoints={{
          576.02: {},
          992.02: {
            pagination: {
              clickable: false,
            },
          },
        }}
        // modules={[FreeMode, Navigation, Thumbs, EffectCube, Pagination]}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        className='bigSwiper'
      >
        {props.bookImages.images.map((img: any, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`${props.bookImages}-${index}`}>
            <img
              className={IMG_STYLES}
              alt={props.title}
              src={img ? img : bookNotUrl}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = bookNotUrl;
                e.currentTarget.classList.add(IMG_ERROR_STYLES);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-custom-pagination' />
      <Swiper
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        centerInsufficientSlides={true}
        grabCursor={true}
        scrollbar={{
          dragSize: 190,
          hide: true,
          draggable: true,
        }}
        spaceBetween={30}
        slidesPerView={5}
        freeMode={true}
        className={countImgs >= 2 ? 'smallSwiper' : SMALL_SWIPER_NONE_STYLES}
      >
        {props.bookImages.images.map((img: any, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`${props.bookImages}-${index}`} data-test-id='slide-mini'>
            <img
              alt={props.title}
              src={img}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = bookNotUrl;
                e.currentTarget.classList.add(IMG_ERROR_STYLES);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};
