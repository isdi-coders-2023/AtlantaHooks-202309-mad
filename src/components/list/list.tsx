import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import { Card } from '../card/card';

export function List() {
  const {
    countryTools: { countries, loadCountries },
  } = useContext(AppContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <div>
      <ul className="country_list">
        {countries.map((item) => (
          <Card country={item} key={item.name.common}></Card>
        ))}
      </ul>
    </div>
  );
}
