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
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);
  const handleChangePage = (increment: number) => {
    if (countriesState.page === 1 && increment === -1) {
      dispatch(ac.changePageActionCreator(countriesState.page));
    } else if (countriesState.page === 25 && increment === +1) {
      dispatch(ac.changePageActionCreator(countriesState.page));
    } else {
      dispatch(ac.changePageActionCreator(countriesState.page + increment));
    }
  };

  return { countriesState, loadCountries, handleChangePage };
}
