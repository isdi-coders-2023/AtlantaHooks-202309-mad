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
              src="./public/sign-of-the-arrow-compass-symbol-is-isolated-on-a-white-background-arrow-compass-icon-color-editable-vector.png"
              alt="Previous Page"
            />
          </p>
        )}
        {countriesState.page < 25 && (
          <p onClick={() => handleChangePrivatePage(+1)} role="button">
            <img
              className="right-arrow"
              src="./public/sign-of-the-arrow-compass-symbol-is-isolated-on-a-white-background-arrow-compass-icon-color-editable-vector.png"
              alt="Next Page"
            />
          </p>
        )}
      </div>
    </>
  );
}
