import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import './filter.scss';
import { AppContext } from '../../context/context';

export function Filter() {
  const [selectedLanguage] = useState('all');
  const { loadCountries, handleChangeFilter } = useContext(AppContext);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  const handleFilterInput = (event: SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    const languageInput = input.value;

    handleChangeFilter(languageInput);
  };
  return (
    <select
      className="filter"
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
