import { SyntheticEvent, useContext, useRef } from 'react';
import { AppContext } from '../../context/context';
import { Country } from '../../model/country.types';
import './country_form.scss';

export function AddNewCountry() {
  // tenias el mismo nombre de la función
  const { addCountry } = useContext(AppContext);

  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();

    const formData = new FormData(form);
    const countryName = formData.get('name') as string;
    const countryCapital = formData.get('capital') as string;
    const countryArea = parseFloat(formData.get('area') as string);
    const countryPopulation = parseInt(formData.get('population') as string);
    const countryRegion = formData.get('region') as string;
    const countrySubregion = formData.get('subregion') as string;
    const countryFlag = formData.get('flag') as string;

    const newCountry: Partial<Country> = {
      name: {
        common: countryName,
        official: countryName,
        nativeName: {
          eng: {
            official: countryName,
            common: countryName,
          },
        },
      },
      capital: [countryCapital],
      area: countryArea,
      population: countryPopulation,
      region: countryRegion,
      subregion: countrySubregion,
      flags: {
        png: countryFlag,
        svg: countryFlag,
        alt: 'Bandera de ' + countryName,
      },
    };

    addCountry(newCountry);
    form.reset();
  };

  const handleCancelCreateCountry = () => {
    formRef.current?.reset();
  };

  return (
    <section className="add-country">
      <div>
        <h2>Create country</h2>
      </div>

      <div className="country-form">
        <form ref={formRef} action="" name="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country-name">Nombre</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label htmlFor="country-flag">Bandera</label>
            <input
              type="text"
              name="flag"
              placeholder="Inserta una URL"
              required
            />
          </div>
          <div>
            <label htmlFor="country-capital">Capital</label>
            <input type="text" name="capital" required />
          </div>
          <div>
            <label htmlFor="country-area">Superficie</label>
            <input type="number" name="area" required />
          </div>
          <div>
            <label htmlFor="country-population">Poblacion</label>
            <input type="number" name="population" required />
          </div>
          <div>
            <label htmlFor="country-region">Continente</label>
            <input type="text" name="region" required />
          </div>
          <div>
            <label htmlFor="country-region">Subregión</label>
            <input type="text" name="subregion" required />
          </div>

          <div>
            <button type="submit">Añadir</button>
            <button onClick={handleCancelCreateCountry}>Cancelar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
