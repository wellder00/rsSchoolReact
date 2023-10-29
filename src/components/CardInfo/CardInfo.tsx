import { useLoaderData, Link, LoaderFunction } from 'react-router-dom';

import styles from './CardInfo.module.scss';

import { Character } from '../../types/interfaces';
import { RickAndMortyAPI } from '../../utils/constants/api';
import { Button } from '@components/Button';

export const loader: LoaderFunction = async ({ params }) => {
  if (!params || typeof params.characterId !== 'string') {
    throw new Error('Invalid character ID');
  }

  const response = await fetch(`${RickAndMortyAPI}/${params.characterId}`);
  if (!response.ok) {
    throw new Error('ERROR HTTP: ' + response.status);
  }

  const character = await response.json();

  return { character };
};

interface CharacterData {
  character: Character;
}

const CardInfo = () => {
  const { character } = useLoaderData() as CharacterData;

  return (
    <div className={styles.characterInfo}>
      <div className={styles.infoWrap}>
        <h3 className={styles.title}>{character.name}</h3>
        <div className={styles.blockInfo}>
          <div>Status: {character.status.toLowerCase()}</div>
          <div>Species: {character.species.toLowerCase()}</div>
          <div>Gender: {character.gender.toLowerCase()}</div>
          <div>Location: {character.location?.name.toLowerCase()}</div>
          <div>Origin: {character.origin?.name}</div>
        </div>
        <img className={styles.image} src={character.image} alt="image character" />
        <div>
          <Link to={'/'}>
            <Button className={'backButton'}>Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
