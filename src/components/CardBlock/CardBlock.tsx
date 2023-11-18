import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import Card from '@components/Card/Card';
import { MyContextType, Person, Pokemon } from '../../types/interfaces';

type Props = {
  pokemonData: MyContextType;
  isLoading: boolean;
};

const CardBlock: React.FC<Props> = ({ pokemonData, isLoading }) => {
  const [pokemons, setPokemons] = useState<(Pokemon | null | undefined)[]>([]);
  const { pathname } = useLocation();

  async function getPokemon() {
    if (pokemonData === null) {
      return;
    } else if ('results' in pokemonData) {
      const requests = pokemonData.results.map(async (person: Person) => {
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
    getPokemon();
  }, [pokemonData]);

  if (isLoading) {
    return <Loader />;
  }

  if (!pokemonData && !isLoading) {
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
