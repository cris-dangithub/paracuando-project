import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Event } from '../../lib/interfaces/events.interface';
import { Heart } from '../assets/svg/Heart';
import VotesIconCard from '../assets/svg/VotesIconCard';

interface EventCard {
  event: Event;
}

const CardEvent: React.FC<EventCard> = ({ event }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const router = useRouter();
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // Valid if user logged (popup if not) -> Hacer uso de estados globales
    if (isLogged) {
      setIsFavorite(!isFavorite);
    } else {
      // logica si falso
    }
  };
  const handleDetails = () => {
    router.push(`/details/${event.id}`);
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
            src={event.image}
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
            {event.short_description}
          </p>
          <div className="absolute w-full h-full top-0 right-0 text-gradient"></div>
        </div>
        <Link
          href={event.url}
          target="_blank"
          className="mt-1 font-medium text-app-blue"
        >
          {event.url.replace('https://', '')}
        </Link>
        <span className="flex gap-2 mt-3">
          <VotesIconCard /> {event.votes} votes
        </span>
      </div>
    </div>
  );
};

export default CardEvent;
