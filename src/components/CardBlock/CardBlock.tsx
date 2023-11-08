import React, { useState, useEffect, useContext } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import notFound from '../../assets/images/notFound.png';

import { Person, Pokemon } from '../../types/interfaces';
import pokemonDataContext from '../../state/ContextPokemonData';

const CardBlock = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<(Pokemon | null | undefined)[]>([]);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const initialValueLimit = searchParams.get('limit');
  const initialValueOffset = searchParams.get('offset');
  const initialValuePage = searchParams.get('page');
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

  const renderCharacterCard = (data: Pokemon | null | undefined) => (
    <Link
      className={styles.link}
      key={data?.id}
      to={`about_character/${data?.id}?limit=${initialValueLimit}&offset=${initialValueOffset}&page=${initialValuePage}`}
    >
      <div className={`${pathname === '/' ? styles.card : styles.miniCard}`}>
        <div className={styles.characterInfo}>
          <h2 className={`${pathname === '/' ? styles.title : styles.miniTitle}`}>{data?.name}</h2>
          <div className={styles.characteristic}>Weight: {data?.weight}</div>
          <div className={styles.characteristic}>Species: {data?.species}</div>
        </div>
        <img className={styles.characterImage} src={data?.sprites || notFound} alt={data?.name} />
      </div>
    </Link>
  );

  if (loading) {
    return <Loader />;
  }

  if (!PokemonDate && !loading) {
    return <NotFound />;
  }

  return (
    <div data-testid="card-wrapper" className={styles.wrapper}>
      {pokemons?.map((data) => renderCharacterCard(data))}
    </div>
  );
};

export default CardBlock;
