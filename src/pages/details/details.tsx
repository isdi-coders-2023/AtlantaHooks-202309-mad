import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/context';
import './detalis.scss';

export default function DetailsPage() {
  const { name } = useParams();
  const { countriesState } = useContext(AppContext);
  const country = countriesState.country.find(
    (item) => item.name.common === name
  );
  console.log(country);
  console.log(typeof country);

  if (typeof country === undefined) {
    return <p>hola</p>;
  } else {
    return (
      <>
        <div className="country-detail">
          <h2>{name}</h2>
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
            Continente:{' '}
            <span className="detail-subtitle">{country?.region}</span>
          </p>
          <p>
            Subregión:{' '}
            <span className="detail-subtitle">{country?.subregion}</span>
          </p>
        </div>
      </>
    );
  }
}
