import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import { Person, Pokemon } from '../../types/interfaces';
import pokemonDataContext from '../../state/ContextPokemonData';
import Card from '@components/Card/Card';

const CardBlock = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<(Pokemon | null | undefined)[]>([]);
  const { pathname } = useLocation();

  const PokemonDate = useContext(pokemonDataContext);

  async function getPokemon() {
    if (PokemonDate === null) {
      return;
    } else if ('results' in PokemonDate) {
      const requests = PokemonDate.results.map(async (person: Person) => {
        try {
          if (person.url) {
            const response = await axios.get(person.url);
            return {
              id: response?.data.id,
              name: response?.data.name,
              weight: response?.data?.weight,
              species: response?.data?.species?.name,
              sprites: response?.data?.sprites?.front_shiny,
            };
          } else if (person.id) {
            return {
              id: person?.id,
              name: person?.name,
              weight: person?.weight,
              species: person?.species?.name,
              sprites: person?.sprites?.front_shiny,
            };
          }
        } catch (error) {
          console.error('Request ERROR:', error);
          return null;
        }
      });
      const responses = await Promise.all(requests);

      setPokemons(responses);
    }
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await getPokemon();
      setLoading(false);
    }
    fetchData();
  }, [PokemonDate]);

  if (loading) {
    return <Loader />;
  }

  if (!PokemonDate && !loading) {
    return <NotFound />;
  }

  return (
    <div data-testid="card-wrapper" className={styles.wrapper}>
      {pokemons?.map((data) => (
        <div key={data?.id}>
          <Card data={data} pathname={pathname} />
        </div>
      ))}
    </div>
  );
};

export default CardBlock;
