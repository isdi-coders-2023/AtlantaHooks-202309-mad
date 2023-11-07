import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function Page() {
  const { page, setPage } = useContext(AppContext);
  const handleChangePage = (increment: number) => {
    if (page === 1 && increment === -1) {
      setPage(page);
    } else if (page === 25 && increment === +1) {
      setPage(page);
    } else {
      setPage(page + increment);
    }
  };

  return (
    <>
      <button onClick={() => handleChangePage(+1)}>Next Page</button>
      <button onClick={() => handleChangePage(-1)}>Previous Page</button>
    </>
  );
}
