import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardEvent from '../../card/CardEvent';

interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: Event[];
}

export const EventSlider: React.FC<IEventSlider> = ({
  title,
  subtitle,
  events,
}) => {
  return (
    <div>
      <div className="pb-6">
        <h2 className="app-title-2 pb-1 text-app-blackLight">{title}</h2>
        <p className="app-subtitle-2 text-app-grayDark">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset', paddingBottom: '10px' }}
          slidesPerView={'auto'}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index}>
              <CardEvent key={index} event={event} />
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';
import { Event } from '../../../lib/interfaces/events.interface';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
