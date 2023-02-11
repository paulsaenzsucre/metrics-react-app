import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import './mapCard.css';

const MapCard = (props) => {
  const {
    id,
    mapTitle,
    mapStat,
    image,
    statNoun,
    cardType,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => navigate(`/${id}`);

  return (
    <div className={`flex ${cardType === 'square' ? 'flex-column card-cont' : 'big-card-cont'}`}>
      {
        cardType === 'square'
          ? (
            <IconContext.Provider
              value={{ color: 'var(--enfasis-color)', size: '1.2rem' }}
            >
              <button className="icon-button" type="button" aria-label="Login" onClick={handleClick}>
                <BsArrowRightCircle />
              </button>
            </IconContext.Provider>
          )
          : undefined
      }

      <img className={`${cardType === 'square' ? 'card-img' : 'big-card-img'}`} src={image} alt="Logo" />
      <div className="card-info">
        <p className="cabin-700 card-title">{`${mapTitle} (${id})`}</p>
        <p className="lato-300 card-stats">{`${mapStat} ${statNoun}`}</p>
      </div>

    </div>
  );
};

MapCard.propTypes = {
  id: PropTypes.string.isRequired,
  mapTitle: PropTypes.string.isRequired,
  mapStat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  statNoun: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default MapCard;
