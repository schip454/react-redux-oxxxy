import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ScrollAnimation from 'react-animate-on-scroll';
import { useRef } from 'react';
import { SLIDER_BUTTON_TYPES } from '../../utils/constants';

import 'swiper/css';

import Section from '../Section/Section';
import SectionTitle from '../SectionTitle/SectionTitle';
import Icon from '../Icon/Icon';
import { useCallback } from 'react';
import Loader from '../Loader/Loader';
import { useNewsItems } from '../../hooks/useNewsItems';

const News = () => {
  const { PREV, NEXT } = SLIDER_BUTTON_TYPES;
  const { items, isLoading } = useNewsItems();

  const swiperRef = useRef<SwiperRef>(null);

  const handleButtonClick = useCallback(
    (type: string) => {
      if (!swiperRef.current) return;

      const { swiper } = swiperRef.current;

      type === NEXT ? swiper.slideNext() : swiper.slidePrev();
    },
    [NEXT]
  );

  return (
    <Section className="news-section">
      <div className="container">
        <SectionTitle text="Новости" />
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            ref={swiperRef}
            spaceBetween={24}
            slidesPerView={4}
            className="news"
            navigation
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              1366: {
                slidesPerView: 4,
              },
              720: {
                slidesPerView: 3,
              },
              360: {
                slidesPerView: 2,
              },
            }}>
            {items.map(({ title, sys: { id }, cover: { url } }, i: number) => (
              <SwiperSlide key={id}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOutLeft"
                  delay={i * 100}>
                  <Link className="news-item" to={`/news/${id}`}>
                    <div className="news-item__img">
                      <img src={url} alt={title} />
                    </div>
                    <h3 className="news-item__title">{title}</h3>
                  </Link>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
            <div className="navigation">
              <div
                className="navigation-button navigation-prev"
                onClick={() => handleButtonClick(PREV)}>
                <Icon name="slider-arrow" />
              </div>
              <div
                className="navigation-button navigation-next"
                onClick={() => handleButtonClick(NEXT)}>
                <Icon name="slider-arrow" />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </Section>
  );
};

export default News;
