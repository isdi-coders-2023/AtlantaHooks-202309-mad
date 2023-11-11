import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function PrivatePage() {
  const { handleChangePrivatePage, countriesState } = useContext(AppContext);

  return (
    <>
      {countriesState.privatePage < 25 && (
        <button onClick={() => handleChangePrivatePage(+1)}>Next Page</button>
      )}
      {countriesState.privatePage > 1 && (
        <button onClick={() => handleChangePrivatePage(-1)}>
          Previous Page
        </button>
      )}
    </>
  );
}
