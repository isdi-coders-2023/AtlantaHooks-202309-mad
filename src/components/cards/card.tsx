import './card.scss';
import { Country } from '../../model/country.types';

type PropsType = {
  country: Country;
};
export const Card = ({ country }: PropsType) => {
  const handleAddToFavorites = () => {};

  return (
    <div className="card">
      <h2>{country.name.official}</h2>
      <p>{country.capital}</p>
      <p>{country.region}</p>
      <button onClick={handleAddToFavorites}>Añadir a favoritos</button>
    </div>
  );
};
export default Card;
