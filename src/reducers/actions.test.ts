import { Country } from '../model/country.types';
import {
  changePageActionCreator,
  loadActionCreator,
} from '../reducers/actions';

describe('loadActionCreator', () => {
  it('You should create an action of type "load" with the correct payload', () => {
    const payload = [{ name: { common: 'Hello' } } as Country];

    const action = loadActionCreator(payload);

    expect(action.type).toBe('load');

    expect(action.payload).toEqual(payload);
  });
});

describe('changePageActionCreator', () => {
  it('You should create an action of type "load" with the correct payload', () => {
    const payload = 1;

    const action = changePageActionCreator(payload);

    expect(action.type).toBe('changePage');

    expect(action.payload).toEqual(payload);
  });
});
