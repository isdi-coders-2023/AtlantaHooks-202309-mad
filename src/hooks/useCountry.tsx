import { useMemo, useCallback, useReducer } from 'react';
import { PrivateRepo, Repo } from '../services/repo';
import { countryReducer } from '../reducers/reducer';
import * as ac from '../reducers/actions';
import { Country } from '../model/country.types';

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

  const addCountry = async (country: Partial<Country>) => {
    //cambié el nombre de la variable
    try {
      const newCountry = await privaterepo.createCountry(country);

      dispatch(ac.createActionCreator(newCountry));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateCountry = async (
    id: Country['name']['common'],
    country: Partial<Country>
  ) => {
    try {
      const updatedCountry = await privaterepo.updateCountry(id, country);
      dispatch(ac.updateActionCreator(updatedCountry));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteCountry = async (id: Country['name']['common']) => {
    try {
      // Asíncrona -> API
      await privaterepo.deleteCountry(id);
      // Síncrono -> Vista
      // setNotes(notes.filter((item) => item.id !== id));
      dispatch(ac.deleteActionCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    countriesState,
    loadCountries,
    handleChangePage,
    handleChangeFilter,
    loadPrivateCountries,
    handleChangePrivatePage,
    handleChangePrivateFilter,
    addCountry,
    updateCountry,
    deleteCountry,
  };
}
