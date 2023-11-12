import './card.scss';
import { Country } from '../../model/country.types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/context';

type PropsType = {
  country: Country;
};
export function Card({ country }: PropsType) {
  const { addCountry } = useContext(AppContext);
  const handleAddToFavorites = () => {
    addCountry(country);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{country.name.common}</h2>
        <img
          role="button"
          src="./star-icon.png"
          alt="Add Country Icon"
          onClick={handleAddToFavorites}
        />
      </div>
      <Link
        to={'/details/' + country.name.common}
        style={{ textDecoration: 'none' }}
      >
        <div className="card-image">
          <img src={country.flags.png} alt="Country Flag" />
        </div>
        <div className="card-info">
          <p>
            Capital:{' '}
            <span className="country_card_info"> {country.capital}</span>
          </p>
          <p>
            Continente:{' '}
            <span className="country_card_info"> {country.region} </span>
          </p>
          <p>
            Population:{' '}
            <span className="country_card_info"> {country.population} </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
