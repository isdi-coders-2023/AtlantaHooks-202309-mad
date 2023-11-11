import { useMemo, useCallback, useReducer } from 'react';
import { PrivateRepo, Repo } from '../services/repo';
import { countryReducer } from '../reducers/reducer';
import * as ac from '../reducers/actions';

export function useCountry() {
  const [countriesState, dispatch] = useReducer(countryReducer, {
    country: [],
    page: 1,
    privateCountry: [],
    privatePage: 1,
  });

  const repo = useMemo(() => new Repo(), []);
  const privaterepo = useMemo(() => new PrivateRepo(), []);

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
  const loadPrivateCountries = useCallback(async () => {
    try {
      // Asíncrona
      const loadedPrivateCountries = await privaterepo.getCountry();
      // Síncrono
      dispatch(ac.loadPrivateActionCreator(loadedPrivateCountries));
    } catch (error) {}
  }, [privaterepo]);

  const handleChangePrivatePage = (increment: number) => {
    dispatch(
      ac.changePrivatePageActionCreator(countriesState.privatePage + increment)
    );
  };

  const handleChangePrivateFilter = async (language: string) => {
    try {
      countriesState.privatePage = 1;
      const data = await privaterepo.getCountry(language);
      dispatch(ac.loadPrivateActionCreator(data));
    } catch (error) {}
  };

  return {
    countriesState,
    loadCountries,
    handleChangePage,
    handleChangeFilter,
    loadPrivateCountries,
    handleChangePrivatePage,
    handleChangePrivateFilter,
  };
}
