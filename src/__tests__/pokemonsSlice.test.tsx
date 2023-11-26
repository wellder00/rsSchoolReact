import savePokemonsReducer, { savePokemons } from '../lib/redux/slices/savePokemons';

describe('savePokemons', () => {
  it('test default state', () => {
    const res = savePokemonsReducer(undefined, { type: [] });
    expect(res).toEqual({ pokemons: [] });
  });

  it('should save pokemons', () => {
    const action = {
      type: savePokemons.type,
      payload: [{ pokemons: 'Here must be info about my pokemons' }],
    };
    const res = savePokemonsReducer({ pokemons: [] }, action);
    expect(res.pokemons).toEqual([{ pokemons: 'Here must be info about my pokemons' }]);
  });
});
