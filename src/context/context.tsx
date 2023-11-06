import { createContext } from 'react';

export type ContextStructure = {
  page: number;
  setPage: (actualDisplay: number) => void;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
