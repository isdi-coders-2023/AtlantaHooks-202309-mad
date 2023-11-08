import { createContext } from 'react';

import { useCountry } from '../hooks/useCountry';

export type ContextStructure = ReturnType<typeof useCountry>;

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
