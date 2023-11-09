import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Repo } from '../../services/repo';

import { AppContext } from '../../context/context';

export function Filter() {
  const {
    loadCountries,
    countriesState: { page, country },
  } = useContext(AppContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);
  
  

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      const repo = new Repo();
      const apiUrl = `https://restcountries.com/v3.1/lang/${selectedLanguage}`;
      // const data = await repo.getCountry();
      
      console.log(data)
      console.log(apiUrl)
      
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  };

  return (
    <form role="form" onSubmit={handleSubmit} className="filter_form">
      <select
        name="filter_language"
        id="filter_language"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
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
