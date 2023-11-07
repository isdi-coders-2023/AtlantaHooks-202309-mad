import { useState } from 'react';
import { AppContext, ContextStructure } from './context';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [page, setPage] = useState(1);

  const context: ContextStructure = {
    page,
    setPage,
    countryTools: countryState,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
