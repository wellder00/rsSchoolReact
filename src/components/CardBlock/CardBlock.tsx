import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

import styles from './CardBlock.module.scss';

import { Loader } from '../Loader';
import { NotFound } from '../NotFound';

import { Info, Person, Pokemon, PokemonData } from '../../types/interfaces';

type Props = {
  pokemonData: Info<Person> | PokemonData | null;
};

const CardBlock: React.FC<Props> = ({ pokemonData }) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<(Pokemon | null | undefined)[]>([]);
  console.log(pokemons);
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
    async function fetchData() {
      await getPokemon();
      setLoading(false);
    }
    fetchData();
  }, [pokemonData]);

  const renderCharacterCard = (data: Pokemon | null | undefined) => (
    <Link className={styles.link} key={data?.id} to={`about_character/${data?.id}`}>
      <div className={`${pathname === '/' ? styles.card : styles.miniCard}`}>
        <div className={styles.characterInfo}>
          <h2 className={`${pathname === '/' ? styles.title : styles.miniTitle}`}>{data?.name}</h2>
          <div className={styles.characteristic}>Weight: {data?.weight}</div>
          <div className={styles.characteristic}>Species: {data?.species}</div>
        </div>
        <img className={styles.characterImage} src={data?.sprites} alt={data?.name} />
      </div>
    </Link>
  );

  if (loading) {
    return <Loader />;
  }

  if (!pokemonData) {
    return <NotFound />;
  }

  return <div className={styles.wrapper}>{pokemons?.map((data) => renderCharacterCard(data))}</div>;
};

export default CardBlock;
