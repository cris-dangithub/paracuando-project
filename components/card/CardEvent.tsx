import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Event } from '../../lib/interfaces/events.interface';
import { Heart } from '../assets/svg/Heart';

interface EventCard {
  event: Event;
}

const CardEvent: React.FC<EventCard> = ({ event }) => {
  const [isLoading, setisLoading] = useState<boolean>(true);
  const handleLike = () => {
    console.log('HOLA');
  };

  return (
    <div className="bg-cyan-300 relative w-72 !h-[450px] overflow-hidden rounded-2xl">
      <button className="absolute right-6 top-52" onClick={handleLike}>
        <Heart isActive={false} />
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
      <div className="py-4 px-6">
        <div>
          <h2 className="text-xl font-semibold ">{event.title}</h2>
          <p className="text-[14.5px]">{event.short_description}</p>
        </div>
        <Link href={event.url} target="_blank">
          {event.url}
        </Link>
        <span>{event.votes} votes</span>
      </div>
    </div>
  );
};

export default CardEvent;
