describe('selectors', () => {
  it('check selectors', () => {
    const pokemon = [{ id: 1, name: 'poke' }];
    const selectPokemon = (state: { pokemon: { id: number; name: string }[] }) => state.pokemon;

    const res = selectPokemon({ pokemon });
    expect(res).toEqual(pokemon);
  });
});
