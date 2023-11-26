import inputValueReducer, { saveItemValue } from '../lib/redux/slices/inputValueSlice';

describe('pokemonSlice', () => {
  it('test default state', () => {
    const res = inputValueReducer(undefined, { type: '' });
    expect(res).toEqual({ value: '' });
  });

  it('should save input value', () => {
    const action = { type: saveItemValue.type, payload: 'Text' };
    const res = inputValueReducer({ value: '' }, action);
    expect(res.value).toBe('Text');
  });
});
