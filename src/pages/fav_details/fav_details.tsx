import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../context/context';
import '../fav_details/fav_details.scss';
import { Country } from '../../model/country.types';

export default function PrivateDetailsPage() {
  const { id } = useParams();
  const { countriesState, loadPrivateCountries } = useContext(AppContext);
  console.log(countriesState.privateCountry);

  useEffect(() => {
    loadPrivateCountries();
  }, [loadPrivateCountries]);

  const country = countriesState.privateCountry.find(
    (item: Country) => item.id == (id as string)
  );

  return (
    <>
      <Link to={'/favorites'}>
        <img src="../back-arrow.png" alt="Back Arrow" width={40} />
      </Link>
      <div className="country-detail">
        <h2>{country?.name.common}</h2>
        <img src={country?.flags.png} alt="" />
        <h3>
          Capital: <span className="detail-subtitle">{country?.capital}</span>
        </h3>
        <p>
          Superficie:{' '}
          <span className="detail-subtitle">{country?.area} KM2</span>
        </p>
        <p>
          Población:{' '}
          <span className="detail-subtitle">{country?.population}</span>
        </p>
        <p>
          Continente: <span className="detail-subtitle">{country?.region}</span>
        </p>
        <p>
          Subregión:{' '}
          <span className="detail-subtitle">{country?.subregion}</span>
        </p>
      </div>
    </>
  );
}
