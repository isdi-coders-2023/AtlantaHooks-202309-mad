import { useMemo, useCallback, useReducer } from 'react';
import { Repo } from '../services/repo';
import { countryReducer } from '../reducers/reducer';
import * as ac from '../reducers/actions';

export function useCountry() {
  const [countriesState, dispatch] = useReducer(countryReducer, {
    country: [],
    page: 1,
  });

  const repo = useMemo(() => new Repo(), []);

  const loadCountries = useCallback(async () => {
    try {
      // Asíncrona
      const loadedCountries = await repo.getCountry();
      // Síncrono
      dispatch(ac.loadActionCreator(loadedCountries));
    } catch (error) {}
  }, [repo]);

  const handleChangePage = (increment: number) => {
    dispatch(ac.changePageActionCreator(countriesState.page + increment));
  };

  const handleChangeFilter = async (language: string) => {
    try {
      countriesState.page = 1;
      const data = await repo.getCountry(language);
      dispatch(ac.loadActionCreator(data));
    } catch (error) {}
  };

  return {
    countriesState,
    loadCountries,
    handleChangePage,
    handleChangeFilter,
  };
}
