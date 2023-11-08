import { useReducer} from 'react';
import { AppContext, ContextStructure } from './context';
import { useCountry } from '../hooks/useCountry';
import * as ac from '../reducers/actions'

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {


  const setPage = (page: number) => dispatch(ac.changePageActionCreator(page)) 

  const countryState = useCountry();

  const context: ContextStructure = {
    page,
    setPage,
    countries: countryState.countriesState
    countryTools: 
    page: 
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
function dispatch(arg0: ac.ActionCountry) {
  throw new Error('Function not implemented.');
}

