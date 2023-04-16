import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { EventCard } from '../../lib/interfaces/events.interface';
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks';
import { toggleVisibility } from '../../lib/store/slices/popUpAuth.slices';
import { setUserGlobal } from '../../lib/store/slices/user.slices';
import { Heart } from '../assets/svg/Heart';
import VotesIconCard from '../assets/svg/VotesIconCard';

interface IEventCard {
  event: EventCard;
}

const CardEvent: React.FC<IEventCard> = ({ event }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const router = useRouter();
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Valid if user logged (token and globalState)
    if (user && Cookies.get('token')) {
      setIsFavorite(!isFavorite);
    }
    if (user && !Cookies.get('token')) {
      dispatch(setUserGlobal(null));
    }
    if (!user || !Cookies.get('token')) {
      dispatch(toggleVisibility());
    }
  };
  const handleDetails = () => {
    router.push(`/details/${event.id}`);
  };

  const showImage = () => {
    return event.images?.[0] ? event.images[0].image_url : '/lady-gaga.png';
  };

  return (
    <div
      onClick={handleDetails}
      className="bg-white relative w-full !h-[450px] overflow-hidden rounded-2xl select-none shadow-app-card"
    >
      <button className="absolute right-6 top-52" onClick={handleLike}>
        <Heart isActive={isFavorite} />
        {/* {liked ? 'Te gusta este evento' : 'Me gusta'} */}
      </button>
      <div className="w-full h-60 flex justify-center items-center">
        {isLoading ? (
          <Image
            src={showImage()}
            alt="imagen"
            width="300"
            height="300"
            className="w-full h-full object-cover"
          />
        ) : (
          'Loading'
        )}
      </div>
      <div className="py-4 px-6 flex flex-col">
        <div className="flex flex-col gap-1 h-28 overflow-hidden relative">
          <h2 className="text-xl font-semibold text-app-blackLight">
            {event.title}
          </h2>
          <p className="text-[14.5px] leading-[18px] text-app-grayDark">
            {event.description}
          </p>
          <div className="absolute w-full h-full top-0 right-0 text-gradient"></div>
        </div>

        <Link
          href={
            event.reference_link ? event.reference_link : `/details/${event.id}`
          }
          target="_blank"
          className="mt-1 font-medium text-app-blue"
          onClick={(e) => e.stopPropagation()}
        >
          {event.reference_link
            ? event.reference_link.replace('https://', '')
            : 'Más detalles...'}
        </Link>

        <span className="flex gap-2 mt-3">
          <VotesIconCard /> {event.votes} votes
        </span>
      </div>
    </div>
  );
};

export default CardEvent;
