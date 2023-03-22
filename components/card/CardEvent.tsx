import { Heart } from '../assets/svg/Heart';

const CardEvent = () => {
  const handleLike = () => {
    console.log('HOLA');
  };

  return (
    <div className="card">
      <div className='min-h-[488px] bg-[url("/mock-event-image.png")] bg-cover bg-center'></div>
      <div className="card-content">
        <h2>{/*{props.title}*/}</h2>
        <p>{/* {props.description} */}</p>
        <button className="like-btn" onClick={handleLike}>
          <Heart isActive={true} />
          {/* {liked ? 'Te gusta este evento' : 'Me gusta'} */}
        </button>
      </div>
    </div>
  );
};

export default CardEvent;
// CardEvent.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
// };

//export default CardEvent
