import { useState, useMemo, useCallback } from 'react';
import { Country } from '../model/country.types';
import { Repo } from '../services/repo';

export function useCountry() {
  const [countries, setCountries] = useState<Country[]>([]);

  const repo = useMemo(() => new Repo(), []);

  const loadCountries = useCallback(async () => {
    try {
      // Asíncrona
      const loadedCountries = await repo.getCountry();
      // Síncrono
      setCountries(loadedCountries);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  return { countries, loadCountries };
}
