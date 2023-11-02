import { Suspense } from 'react';
import { useLoaderData, Link, LoaderFunction, defer, Await } from 'react-router-dom';
import axios from 'axios';

import styles from './CardInfo.module.scss';

import { Button } from '@components/Button';
import { Loader } from '@components/Loader';

import { PokemonData } from '../../types/interfaces';
import { pokemonAPI } from '../../utils/constants/api';

async function getPokemon(id: number) {
  if (!id || typeof id !== 'number') {
    throw new Error('Invalid character ID');
  }
  const response = await axios.get(`${pokemonAPI}/${id}`);
  return response.data;
}

export const loader: LoaderFunction = async ({ params }) => {
  if (params && params.characterId !== undefined) {
    return defer({
      character: getPokemon(+params.characterId),
    });
  }
};

interface CharacterData {
  character: PokemonData;
}

interface stats {
  stat: {
    name: string;
  };
  base_stat: string;
}

const CardInfo = () => {
  const { character } = useLoaderData() as CharacterData;
  return (
    <div className={styles.characterInfo}>
      <div className={styles.infoWrap}>
        <Suspense fallback={<Loader />}>
          <Await resolve={character}>
            {(person) => (
              <>
                <h3 className={styles.title}>{person.name}</h3>
                <div className={styles.blockInfo}>
                  <div>Weight: {person.weight}</div>
                  <div>Species: {person.species.name}</div>
                  <div className={styles.listWrap}>
                    <ul className={styles.list}>
                      {person.stats.map((stats: stats) => (
                        <li key={stats.stat.name}>{`${stats.stat.name}: ${stats.base_stat}`}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <img
                  className={styles.image}
                  src={person?.sprites?.front_shiny}
                  alt="image person"
                />
                <div>
                  <Link to={'/'}>
                    <Button className={'backButton'}>Back</Button>
                  </Link>
                </div>
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default CardInfo;
