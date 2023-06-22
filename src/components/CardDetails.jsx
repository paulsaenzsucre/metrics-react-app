import PropTypes from 'prop-types';
import './CardDetails.css';

const CardDetails = ({ country }) => {
  const {
    capital,
    subregion,
    latlng,
    startOfWeek,
  } = country;

  const countryCapital = capital === undefined ? 'None' : capital;
  const countrySubregion = subregion === undefined ? 'None' : subregion;
  const latitude = latlng.length > 0 ? latlng[0] : 'None';
  const longitude = latlng.length > 1 ? latlng[1] : 'None';

  return (
    <div>
      <div>
        <h2 className="cabin-400 bar-title">COUNTRY DETAILS</h2>
      </div>
      <div className="card-details-cont">
        <div className="detail-cont">
          <p className="lato-300 detail-item">Capital</p>
          <p className="lato-300 detail-item">{countryCapital}</p>
        </div>
        <div className="detail-cont">
          <p className="lato-300 detail-item">Subregion</p>
          <p className="lato-300 detail-item">{countrySubregion}</p>
        </div>
        <div className="detail-cont">
          <p className="lato-300 detail-item">Latitude</p>
          <p className="lato-300 detail-item">{latitude}</p>
        </div>
        <div className="detail-cont">
          <p className="lato-300 detail-item">Longitude</p>
          <p className="lato-300 detail-item">{longitude}</p>
        </div>
        <div className="detail-cont">
          <p className="lato-300 detail-item">Start Of Week</p>
          <p className="lato-300 detail-item">{startOfWeek}</p>
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  country: PropTypes.PropTypes.shape({
    capital: PropTypes.arrayOf(PropTypes.string.isRequired),
    subregion: PropTypes.string,
    latlng: PropTypes.arrayOf(PropTypes.number.isRequired),
    startOfWeek: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardDetails;
