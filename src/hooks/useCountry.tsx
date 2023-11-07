import { useMemo, useCallback, useReducer } from 'react';
import { Repo } from '../services/repo';
import { countryReducer } from '../reducers/reducer';
import * as ac from '../reducers/actions';

export function useCountry() {
  const [countries, dispatch] = useReducer(countryReducer, []);

  const repo = useMemo(() => new Repo(), []);

  const loadCountries = useCallback(async () => {
    try {
      // Asíncrona
      const loadedCountries = await repo.getCountry();
      // Síncrono
      dispatch(ac.loadActionCreator(loadedCountries));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  return { countries, loadCountries };
}
