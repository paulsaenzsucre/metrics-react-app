import PropTypes from 'prop-types';
import { useState } from 'react';
import MapCard from './MapCard';
import './CardList.css';

const CardList = ({ countries }) => {
  const [filterText, setFilterText] = useState({
    filter: '',
  });

  const onChange = (evt) => {
    setFilterText({
      ...filterText,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="cabin-400 filter-text"
          placeholder="Add filter..."
          value={filterText.filter}
          name="filter"
          onChange={onChange}
        />
        <h2 className="cabin-400 bar-title">STATS BY COUNTRY</h2>
      </div>
      <div className="card-list-cont">
        {countries.filter((country) => country
          .commonName.toLowerCase().startsWith(filterText.filter.toLowerCase()))
          .map((country) => (
            <MapCard
              key={country.id}
              id={country.id}
              mapTitle={country.commonName}
              mapStat={country.population}
              image={country.flag}
              statNoun="persons"
              cardType="square"
            />
          ))}
      </div>
    </div>
  );
};

CardList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    commonName: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  })).isRequired,
};

export default CardList;
