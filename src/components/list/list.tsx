import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import { Card } from '../cards/card';
import { Page } from '../pages/page';

export function List() {
  const {
    countryTools: { countries, loadCountries },
  } = useContext(AppContext);

  const { page } = useContext(AppContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <div>
      <ul className="country_list">
        {countries.slice((page - 1) * 8, page * 8).map((item, i) => (
          <Card country={item} key={item.name.common} />
        ))}
      </ul>
      <Page />
    </div>
  );
}
