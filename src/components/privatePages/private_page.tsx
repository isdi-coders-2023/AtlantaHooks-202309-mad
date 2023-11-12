import { useContext } from 'react';
import { AppContext } from '../../context/context';
import './private_page.scss';

export function PrivatePage() {
  const { handleChangePrivatePage, countriesState } = useContext(AppContext);

  return (
    <>
      <div className="arrows">
        {countriesState.page > 1 && (
          <p onClick={() => handleChangePrivatePage(-1)} role="button">
            <img
              className="left-arrow"
              src="./arrow.png/"
              alt="Previous Page"
            />
          </p>
        )}
        {countriesState.page < 25 && (
          <p onClick={() => handleChangePrivatePage(+1)} role="button">
            <img className="right-arrow" src="./arrow.png" alt="Next Page" />
          </p>
        )}
      </div>
    </>
  );
}
