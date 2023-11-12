import './private_card.scss';
import { Country } from '../../model/country.types';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';
import { useContext } from 'react';

type PropsType = {
  country: Country;
};
export function PrivateCard({ country }: PropsType) {
  const { deleteCountry } = useContext(AppContext);

  const handleDeleteCountry = () => {
    deleteCountry(country.id);
  };

  return (
    <div className="card">
      <div className="private-card-header">
        <div className="card-header">
          <h2>{country.name.common}</h2>
        </div>
        <div className="card-header-images">
          <Link to={'/edit/' + country.id}>
            <img role="button" src="./Pen.png" alt="Edit Country Icon" />
          </Link>

          <img
            role="button"
            src="./x.png"
            alt="Delete Country Icon"
            onClick={handleDeleteCountry}
          />
        </div>
      </div>
      <Link
        to={'/favorites_details/' + country.id}
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
