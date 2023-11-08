import { AppContext, ContextStructure } from './context';
import { useCountry } from '../hooks/useCountry';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const context: ContextStructure = useCountry();

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
