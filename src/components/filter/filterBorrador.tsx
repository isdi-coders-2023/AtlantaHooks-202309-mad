import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Repo } from '../../services/repo';

import { AppContext } from '../../context/context';

export function Filter() {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const { loadCountries, countriesState } = useContext(AppContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  const handleSubmitFilter = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (selectedLanguage !== 'all') {
      try {
        const filterInfo = selectedLanguage;
        const repo = new Repo();
        console.log(filterInfo);
        const data = await repo.getCountry(filterInfo);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    }
  };

  return (
    <form role="form" onSubmit={handleSubmitFilter} className="filter_form">
      <select
        name="filter_language"
        id="filter_language"
        value={selectedLanguage}
        onChange={(event) => setSelectedLanguage(event.target.value)}
      >
        <option value="all">Language</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="portuguese">Portuguese</option>
      </select>
      <button type="submit">Enviar</button>
    </form>
  );
}
