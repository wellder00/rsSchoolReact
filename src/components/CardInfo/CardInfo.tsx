import { Suspense } from 'react';
import { useLoaderData, Link, LoaderFunction, defer, Await } from 'react-router-dom';

import styles from './CardInfo.module.scss';

import { Character } from '../../types/interfaces';
import { pokemonAPI } from '../../utils/constants/api';
import { Button } from '@components/Button';
import { Loader } from '@components/Loader';

async function getCharacter(id: number) {
  if (!id || typeof id !== 'number') {
    throw new Error('Invalid character ID');
  }
  const response = await fetch(`${pokemonAPI}/${id}`);
  if (!response.ok) {
    throw new Error('ERROR HTTP: ' + response.status);
  }
  return response.json();
}

export const loader: LoaderFunction = async ({ params }) => {
  if (params && params.characterId !== undefined) {
    return defer({
      character: getCharacter(+params.characterId),
    });
  }
};

interface CharacterData {
  character: Character;
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
                  <div>Status: {person.status.toLowerCase()}</div>
                  <div>Species: {person.species.toLowerCase()}</div>
                  <div>Gender: {person.gender.toLowerCase()}</div>
                  <div>Location: {person.location?.name}</div>
                  <div>Origin: {person.origin?.name}</div>
                </div>
                <img className={styles.image} src={person.image} alt="image person" />
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
