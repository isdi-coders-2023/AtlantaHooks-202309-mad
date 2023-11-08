import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function Page() {
  const { page, setPage } = useContext(AppContext);

  return (
    <>
      <button onClick={() => handleChangePage(+1)}>Next Page</button>
      <button onClick={() => handleChangePage(-1)}>Previous Page</button>
    </>
  );
}
