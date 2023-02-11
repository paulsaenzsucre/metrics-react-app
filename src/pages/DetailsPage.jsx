import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCountryById } from '../redux/countries/countriesSlice';
import MapCard from '../components/MapCard';
import CardDetails from '../components/CardDetails';

const DetailsPage = () => {
  const { countryId } = useParams();

  const country = useSelector((state) => selectCountryById(state, countryId));
  console.log(countryId, country);
  return (
    <div>
      <MapCard
        id={country.cca3}
        mapTitle={country.name.common}
        mapStat={country.population}
        image={country.flags.svg}
        statNoun="persons"
        cardType="big-card"
      />
      <CardDetails country={country} />
    </div>
  );
};

export default DetailsPage;
