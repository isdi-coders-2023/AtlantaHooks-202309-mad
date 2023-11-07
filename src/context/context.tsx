import { createContext } from 'react';

import { useCountry } from '../hooks/useCountry';

export type ContextStructure = {
  page: number;
  setPage: (actualDisplay: number) => void;
  countryTools: ReturnType<typeof useCountry>;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
