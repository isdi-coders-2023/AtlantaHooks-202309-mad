import { countryReducer } from './reducer';
import { changePageActionCreator, loadActionCreator } from './actions';
import { Country } from '../model/country.types';

describe('countryReducer', () => {
  it('should handle "load" action correctly', () => {
    const initialState = {
      country: [],
      page: 1,
    };

    const payload = [{ name: { common: 'Hola' } } as Country];

    const action = loadActionCreator(payload);
    const newState = countryReducer(initialState, action);

    expect(newState).toEqual({
      country: payload,
      page: 1,
    });
  });
});

describe('countryReducer', () => {
  it('should handle an action to change the page', () => {
    const initialState = {
      country: [],
      page: 1,
    };

    const action = changePageActionCreator(2);

    const newState = countryReducer(initialState, action);

    expect(newState.page).toBe(2);
  });
});
