import { useSelector } from 'react-redux';
import MapCard from '../components/MapCard';
import CardList from '../components/CardList';
import { WORLD } from '../modules/Utilities';
import { selectAllCountries } from '../redux/countries/countriesSlice';

const HomePage = () => {
  const parent = WORLD;

  const countries = useSelector(selectAllCountries);

  const worldPop = countries.reduce((suma, country) => suma + country.population, 0);

  return (
    <div>
      <MapCard
        id={parent.id}
        mapTitle={parent.commonName}
        mapStat={worldPop}
        image={parent.flag}
        statNoun="persons"
        cardType="big-card"
      />
      <CardList
        countries={countries.map((country) => ({
          id: country.cca3,
          commonName: country.name.common,
          continent: country.region,
          flag: country.flags.svg,
          population: country.population,
        }))}
      />
    </div>
  );
};

export default HomePage;
