import '../../styles.css';
import { Country } from '../../model/country.types';

type Props = {
  country: Country;
};

export function Card({ country }: Props) {
  return (
    <div className="card">
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
      <p>{country.region}</p>
    </div>
  );
}
