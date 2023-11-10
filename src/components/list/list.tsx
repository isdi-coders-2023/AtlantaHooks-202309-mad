import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import { Card } from '../cards/card';
import { Page } from '../page/page';
import './list.scss';

export function List() {
  const {
    loadCountries,
    countriesState: { page, country },
  } = useContext(AppContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <div>
      <ul className="country_list">
        {country.slice((page - 1) * 8, page * 8).map((item) => (
          <Card country={item} key={item.name.common} />
        ))}
      </ul>
      <Page />
    </div>
  );
}
