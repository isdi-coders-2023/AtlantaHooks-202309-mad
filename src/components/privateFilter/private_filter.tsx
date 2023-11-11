import { SyntheticEvent, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../context/context';

export function PrivateFilter() {
  const [selectedLanguage] = useState('all');
  const { loadPrivateCountries, handleChangePrivateFilter } =
    useContext(AppContext);

  useEffect(() => {
    loadPrivateCountries();
  }, [loadPrivateCountries]);

  const handleFilterInput = (event: SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    const languageInput = input.value;

    handleChangePrivateFilter(languageInput);
  };
  return (
    <select
      name="filter_language"
      id="filter_language"
      value={selectedLanguage}
      onChange={(event) => handleFilterInput(event)}
    >
      <option value="all">Language</option>
      <option value="all">All Countries</option>
      <option value="english">English</option>
      <option value="spanish">Spanish</option>
      <option value="portuguese">Portuguese</option>
    </select>
  );
}
