import './card.scss';
import { Country } from '../../model/country.types';
import { Link } from 'react-router-dom';

type PropsType = {
  country: Country;
};
export function Card({ country }: PropsType) {
  /*   const handleAddToFavorites = () => {};
  */
  return (
    <div className="card">
      <Link to={'/details/' + country.name.common}>
        <div className="card_header">
          <h2>{country.name.official}</h2>
          <img role="button" src="./star-icon.png" alt="Add Country Icon" />
        </div>
        <img src={country.flags.png} alt="Country Flag" />
        <p>
          Capital: <span className="country_card_info"> {country.capital}</span>
        </p>
        <p>
          Continente:{' '}
          <span className="country_card_info"> {country.region} </span>
        </p>
        <p>
          Population:{' '}
          <span className="country_card_info"> {country.population} </span>
        </p>
      </Link>
    </div>
  );
}
