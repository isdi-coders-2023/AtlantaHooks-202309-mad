import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import './list_private.scss';
import { PrivateCard } from '../privateCards/private_card';
import { PrivatePage } from '../privatePages/private_page';
import { Country } from '../../model/country.types';

export function PrivateList() {
  const {
    loadPrivateCountries,
    countriesState: { privatePage, privateCountry },
  } = useContext(AppContext);

  useEffect(() => {
    loadPrivateCountries();
  }, [loadPrivateCountries]);

  return (
    <div>
      <ul className="country_list">
        {privateCountry
          .slice((privatePage - 1) * 8, privatePage * 8)
          .map((item: Country) => (
            <PrivateCard country={item} key={item.name.common} />
          ))}
      </ul>
      <PrivatePage />
    </div>
  );
}
