import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function Page() {
  const { handleChangePage, countriesState } = useContext(AppContext);

  return (
    <>
      {countriesState.page < 25 && (
        <button onClick={() => handleChangePage(+1)}>Next Page</button>
      )}
      {countriesState.page > 1 && (
        <button onClick={() => handleChangePage(-1)}>Previous Page</button>
      )}
    </>
  );
}
